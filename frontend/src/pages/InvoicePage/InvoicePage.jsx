import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Container } from './InvoicePage.styles';
import { InvoiceComponent, RedirectOnClick } from '../../components';
import { Flex } from '../../../../frontend/src/components';
const order = {
	products: [
		{
			product: {
				title: 'aaaa',
				price: 5,
				brand: 'Lego',
			},
			color: 'green',
			count: 111,
		},
	],
};

export const InvoicePage = () => {
	const { auth } = useSelector(state => ({ ...state }));

	return (
		<Flex align fullWidth>
			<Container>
				<PDFDownloadLink document={<InvoiceComponent order={order} />} fileName='somename.pdf'>
					{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Pobierz swoje zamówienie w formacie pdf')}
				</PDFDownloadLink>
				<RedirectOnClick to='/'>Lub kontynuuj zakupy</RedirectOnClick>
			</Container>
		</Flex>
	);
};
