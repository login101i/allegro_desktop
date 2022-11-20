import SmartImage from '../../assets/pictures/Smart.svg';
import { SectionInfo, Discount, OldPrice, FlexRow, Price, Text, Smart, PriceEnd } from './PriceDiscount.styles';

const PriceDiscount = ({ discount, oldPrice, price, description, extended = true }) => {
	return (
		<>
			<SectionInfo>
				<FlexRow style={{ justifyContent: 'left', alignItems: 'center' }}>
					{discount > 0 && (
						<FlexRow>
							<Discount>-{discount} % </Discount>
							<OldPrice>{oldPrice} zł</OldPrice>
						</FlexRow>
					)}
				</FlexRow>
				<Price>
					{price.toString().split('.')[0]},{''}
					<PriceEnd>{price.toString().split('.')[1]} zł</PriceEnd>
				</Price>

				{extended && (
					<>
						{' '}
						<FlexRow>
							<Smart src={SmartImage} />
							<Text>z kurierem</Text>
						</FlexRow>
					</>
				)}
			</SectionInfo>
		</>
	);
};

export default PriceDiscount;
