import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table';

const InvoiceComponent = ({ order }) => {
	console.log(order);
	return (
		<Document>
			<Page style={styles.body}>
				<Text style={styles.header} fixed>
					~ {new Date().toLocaleString()} ~
				</Text>
				<Text style={styles.title}>Order Invoice</Text>
				<Text style={styles.author}>React Redux Ecommerce</Text>
				<Text style={styles.subtitle}>Order Summary</Text>

				<Table>
					<TableHeader>
						<TableCell>Tytuł</TableCell>
						<TableCell>Cena</TableCell>
						<TableCell>Ilość</TableCell>
						<TableCell>Marka</TableCell>
					</TableHeader>
				</Table>
				
				<Text style={styles.footer}> ~ Dziękujemy za zakupy na allegro ~ </Text>
			</Page>
		</Document>
	);
};

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
	},
	author: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: 'justify',
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey',
	},
	footer: {
		padding: '100px',
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey',
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
});

export default InvoiceComponent;
