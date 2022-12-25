import React from 'react';
import Pagination from 'react-js-pagination';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

import { ResultsContainer, CustomInput, ResultsNavbar, StyledFormControll } from '../Listing.styles';

import { Text, Button, ProductContainer, Flex } from '../../../components';
const Results = ({ sorting, products, handleChange, resPerPage, count, currentPage, productsCount, setCurrentPageNo }) => {
	return (
		<ResultsContainer>
			<ResultsNavbar>
				<ShoppingCartOutlinedIcon style={{ fontSize: '30px' }} />
				<Button background='white' outlined color='var(--linkColor)' width='250px'>
					Połącz te same oferty
				</Button>
				<StyledFormControll>
					<InputLabel id='demo-simple-select-label'>Sortuj według</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={sorting}
						label='Trafność:największa'
						onChange={handleChange}
					>
						<MenuItem value={10}>trafność: największa</MenuItem>
						<MenuItem value={20}>Cena:od najniższej</MenuItem>
						<MenuItem value={20}>Cena:od najwyższej</MenuItem>
						<MenuItem value={20}>Cena: z dostawą</MenuItem>
						<MenuItem value={30}>Popularność</MenuItem>
					</Select>
				</StyledFormControll>
				<Flex>
					<CustomInput disableunderline='true' />
					z 100
					<ShoppingCartOutlinedIcon style={{ fontSize: '30px' }} />
				</Flex>
			</ResultsNavbar>

			{products.length > 0 ? (
				products.map(product => (
					<ProductContainer
						key={product._id}
						img={product.img[0].url}
						discount={product.discount}
						oldPrice={product.oldPrice}
						price={product.price}
						product={product}
						extended={true}
						row={true}
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
					nextPageText={'Następna'}
					prevPageText={'Poprzednia'}
					firstPageText={'Pierwsza'}
					lastPageText={'Ostatnia'}
					itemClass='bg-success'
					linkClass='page-link'
				/>
			)}
		</ResultsContainer>
	);
};

export default Results;
