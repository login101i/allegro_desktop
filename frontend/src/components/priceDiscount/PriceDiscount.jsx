import { useMediaQuery } from 'react-responsive';
import SmartImage from '../../assets/pictures/Smart.svg';
import { screens } from '../responsive';
import { SectionInfo, Discount, OldPrice, FlexRow, Price, Text, Smart, PriceEnd } from './PriceDiscount.styles';

const PriceDiscount = ({ discount = 0, oldPrice = 0, price = 0, description = '', extended = false }) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

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
				<Price isMobile={isMobile}>
					{price.toString().split('.')[0]}
					<PriceEnd isMobile={isMobile}>{price.toString().split('.')[1]} zł</PriceEnd>
				</Price>

				{extended && (
					<>
						{' '}
						<FlexRow>
							<Smart src={SmartImage} />
							<Text>z kurierem taniej</Text>
						</FlexRow>
					</>
				)}
			</SectionInfo>
		</>
	);
};

export default PriceDiscount;
