import React, { useEffect } from "react";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Input } from "@mui/material";
import Pagination from "react-js-pagination";

import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Select } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
	width: 300px;
`;

const FilterContainer = styled.div`
	width: 252px;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	flex-grow: grow;
	padding: 12px;
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
	width: 90px;
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

	const [category, setCategory] = React.useState();
	const [rating, setRating] = React.useState();

	const [value, setValue] = React.useState("");
	console.log("To jest value");
	console.log(value);

	const handleValue = (val) => {
		setValue(val);
		setRating(val);
	};

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
		dispatch(
			getProducts(currentPage, keyword, filteredPrice, category, rating)
		);
		console.log("Pobieram produkty.");
	}, [dispatch, currentPage, keyword, category, rating]);

	const { loading, products, error, productsCount, resPerPage } = useSelector(
		(state) => state.products
	);

	console.log(products);

	function setCurrentPageNo(pageNumber) {
		setCurrentPage(pageNumber);
	}

	let count = productsCount;

	const [openRatings, setOpenRatings] = React.useState(true);
	const handleClick = () => {
		setOpenRatings(!openRatings);
	};

	const [range, setRange] = React.useState("");
	const [priceMin, setPriceMin] = React.useState("");
	const [priceMax, setPriceMax] = React.useState("");

	const handleRange = (val) => {
		setRange(val);

		var regex = /\d+/g;
		var range = val.match(regex);
		console.log(range);

		setPriceMin(range[0]);
		setPriceMax(range[1] ? range[1] : "");
	};

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
					<Text bold>Cena (zł)</Text>
					{[
						"poniżej 10zł",
						"10 zł do 50zł",
						"50zł do 100zł",
						"powyżej 100zł"
					].map((rang) => (
						<FlexRow>
							<Checkbox
								value={rang}
								checked={rang === range}
								onClick={() => handleRange(rang)}
							/>
							<Text>{rang}</Text>
						</FlexRow>
					))}
					<FlexRow style={{ width: "90%" }}>
						<CustomInput
							onChange={(e) => setMinPrice(e.target.value)}
							placeholder="od"
							value={priceMin}
						/>
						-
						<CustomInput
							onChange={(e) => setMaxPrice(e.target.value)}
							placeholder="do"
							value={priceMax}
						/>
					</FlexRow>
					<Text bold>Kategorie</Text>
					{categories.map((c) => (
						<Text hovered key={c} onClick={() => setCategory(c)}>
							{c}
						</Text>
					))}
					<FlexRow style={{ width: "90%" }}>
						<Text bold>Ocena Produktu</Text>
						<ArrowBackIosIcon
							onClick={handleClick}
							style={{ fontSize: "16px" }}
						/>
					</FlexRow>
					<Text
						wrap
						subTitle="Średnia ocena produktu na podstawie opinii klientów. Oferty tego samego produktu mają tę samą ocenę."
					></Text>
					{openRatings &&
						[5.0, 4.0, 3.5].map((r) => (
							<FlexRow style={{ width: "90%" }}>
								<Checkbox
									checked={r === value}
									value={r}
									onClick={() => handleValue(r)}
								/>

								<Text>od {r.toString()}</Text>
								<Stack spacing={1}>
									<Rating defaultValue={r} precision={0.5} readOnly />
								</Stack>
							</FlexRow>
						))}
					<Button title="Filtruj" onClick={filtruj} width />
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
