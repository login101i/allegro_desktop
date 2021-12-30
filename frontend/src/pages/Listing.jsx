import React, { useEffect } from "react";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Input } from "@mui/material";
import Pagination from "react-js-pagination";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
	Text,
	Button,
	ProductContainer,
	MetaData,
	Loader
} from "../components";

import { getProducts } from "../redux/actions/productActions";

const Container = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	flex: 1;
	width: 80%;
	background-color: white;
`;

const Space = styled.div`
	width: 20px;
	background-color: ${(props) => props.theme.colors.allegroBackground};
`;

const NavContainer = styled.div`
	color: var(--linkColor);
	display: flex;
	align-items: center;

	justify-content: space-between;
	width: 80%;
`;

const FlexRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 150px;
`;

const FilterContainer = styled.div`
	width: 252px;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	flex-grow: grow;
`;

const ResultsContainer = styled.div`
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	align-items: center;
`;

const CustomInput = styled(Input)`
	border: 1px solid lightGrey;
	padding: 5px;
	margin: 5px 0px;
	width: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 42px;
`;

const ResultsNavbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	flex-direction: row;
	margin-top: 16px;
`;

const StyledFormControll = styled(FormControl)(({ theme }) => ({
	backgroundColor: theme.colors.allegroColor,
	border: `2px solid ${(props) => props.theme.colors.allegroColor}`,

	color: "green",
	maxHeight: 42,
	width: 300
}));

const Listing = ({ match }) => {
	const [sorting, setSorting] = React.useState("");
	const [currentPage, setCurrentPage] = React.useState(1);

	const [minPrice, setMinPrice] = React.useState(1);
	const [maxPrice, setMaxPrice] = React.useState(1000);

	const [category, setCategory] = React.useState("");

	const categories = [
		"Laptopy",
		"Telefony",
		"Perfumy",
		"Supermarket",
		"AGD",
		"Pupil"
	];

	const filteredPrice = [parseInt(minPrice), parseInt(maxPrice)];

	// const [price, setPrice] = React.useState(filteredPrice);
	console.log(filteredPrice);

	const handleSetPrice = (value, e) => {
		e.preventDefault();
		console.log("price 1");
		console.log(value);
	};

	const handleChange = (event) => {
		setSorting(event.target.value);
	};

	const dispatch = useDispatch();

	let { keyword } = useParams();
	console.log(keyword);

	const filtruj = () => {
		dispatch(getProducts(currentPage, keyword, filteredPrice));
	};

	useEffect(() => {
		dispatch(getProducts(currentPage, keyword, filteredPrice, category));
		console.log("Pobieram produkty.");
	}, [dispatch, currentPage, keyword, category]);

	const { loading, products, error, productsCount, resPerPage } = useSelector(
		(state) => state.products
	);

	function setCurrentPageNo(pageNumber) {
		setCurrentPage(pageNumber);
	}

	let count = productsCount;

	return (
		<>
			<MetaData title={"Listing"} />
			<NavContainer>
				<FlexRow>
					<Text bold size={30}>
						Szukasz "Xiaomi"
					</Text>
					<Text>(387 ofert)</Text>
				</FlexRow>

				<FlexRow>
					<StarBorderIcon style={{ fontSize: "30px" }} />
					<Text uppercase size={20} color="var(--linkColor)">
						obserwuj wyszukiwanie
					</Text>
				</FlexRow>
			</NavContainer>

			<Container row>
				<FilterContainer>
					<Text bold size={24}>
						Podkategorie
					</Text>

					<CustomInput
						value={minPrice}
						onChange={(e) => setMinPrice(e.target.value)}
					/>
					<CustomInput
						value={maxPrice}
						onChange={(e) => setMaxPrice(e.target.value)}
					/>
					<Text>dfdf</Text>

					{categories.map((c) => (
						<Text hovered key={c} onClick={() => setCategory(c)}>
							{c}
						</Text>
					))}
					<Button title="Filtruj" onClick={filtruj} />
				</FilterContainer>
				<Space />
				{!keyword ? (
					<Loader />
				) : (
					<ResultsContainer>
						<ResultsNavbar>
							<ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} />
							<Button
								background="white"
								outlined
								color="var(--linkColor)"
								width="250px"
							>
								Połącz te same oferty
							</Button>
							<StyledFormControll>
								<InputLabel id="demo-simple-select-label">
									Sortuj według
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={sorting}
									label="Trafność:największa"
									onChange={handleChange}
								>
									<MenuItem value={10}>trafność: największa</MenuItem>
									<MenuItem value={20}>Cena:od najniższej</MenuItem>
									<MenuItem value={20}>Cena:od najwyższej</MenuItem>
									<MenuItem value={20}>Cena: z dostawą</MenuItem>
									<MenuItem value={30}>Popularność</MenuItem>
								</Select>
							</StyledFormControll>
							<FlexRow>
								<CustomInput disableUnderline={true} />
								z 100
								<ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} />
							</FlexRow>
						</ResultsNavbar>

						{products.length > 0 ? (
							products.map((product) => (
								<ProductContainer
									key={product._id}
									img={product.img[0].url}
									discount={product.discount}
									oldPrice={product.oldPrice}
									price={product.price}
									product={product}
									extended={true}
									row={true}
									product={product}
									listings
								/>
							))
						) : (
							<Text>Brak produktów dla tej frazy</Text>
						)}

						{resPerPage <= count && (
							<Pagination
								activePage={currentPage}
								itemsCountPerPage={resPerPage}
								totalItemsCount={productsCount}
								onChange={setCurrentPageNo}
								nextPageText={"Następna"}
								prevPageText={"Poprzednia"}
								firstPageText={"Pierwsza"}
								lastPageText={"Ostatnia"}
								itemClass="bg-success"
								linkClass="page-link"
							/>
						)}
					</ResultsContainer>
				)}
			</Container>
		</>
	);
};

export default Listing;
