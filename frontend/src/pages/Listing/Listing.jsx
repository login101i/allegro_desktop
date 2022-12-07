import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PathComponent, Filter, Results } from "./components";
import { getProducts } from "../../redux/actions/productActions";
import { MainContainer } from "./Listing.styles";

import { CartTitle, Loader, PageWidth } from "../../components";

export const Listing = () => {
	const [sorting, setSorting] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [minPrice, setMinPrice] = useState(1);
	const [maxPrice, setMaxPrice] = React.useState(1000);
	const [category, setCategory] = useState("");
	const [rating, setRating] = useState(1);
	const [value, setValue] = useState("");
	const [openRatings, setOpenRatings] = useState(true);
	const [range, setRange] = useState("");
	const [priceMin, setPriceMin] = useState("");
	const [priceMax, setPriceMax] = useState("");

	const handleValue = (val) => {
		setValue(val);
		setRating(val);
	};

	const filteredPrice = [parseInt(minPrice), parseInt(maxPrice)];
	const handleChange = (event) => {
		setSorting(event.target.value);
	};
	const dispatch = useDispatch();
	let { keyword } = useParams();
	const { products, productsCount, resPerPage } = useSelector(
		(state) => state.products
	);

	useEffect(() => {
		dispatch(
			getProducts(currentPage, keyword, filteredPrice, category, rating)
		);
	}, [dispatch, currentPage, keyword, category, rating]);

	// function setCurrentPageNo(pageNumber) {
	// 	setCurrentPage(pageNumber);
	// }

	let count = productsCount;

	const handleRange = (val) => {
		setRange(val);
		var regex = /\d+/g;
		var range = val.match(regex);
		setPriceMin(range[0]);
		setPriceMax(range[1] ? range[1] : "");
	};

	return (
		<PageWidth>
			<CartTitle title={"Listing"} />
			<PathComponent keyword={keyword} count={count} />

			<MainContainer>
				<Filter
					range={range}
					handleRange={handleRange}
					setMinPrice={setMinPrice}
					priceMin={priceMin}
					setMaxPrice={setMaxPrice}
					priceMax={priceMax}
					setCategory={setCategory}
					openRatings={openRatings}
					value={value}
					handleValue={handleValue}
					filterFunc={() =>
						dispatch(getProducts(currentPage, keyword, filteredPrice))
					}
				></Filter>

				{!keyword ? (
					<Loader />
				) : (
					<Results
						sorting={sorting}
						products={products}
						handleChange={handleChange}
						resPerPage={resPerPage}
						count={count}
						currentPage={currentPage}
						productsCount={productsCount}
						setCurrentPageNo={(pageNumber) => setCurrentPage(pageNumber)}
					/>
				)}
			</MainContainer>
		</PageWidth>
	);
};
