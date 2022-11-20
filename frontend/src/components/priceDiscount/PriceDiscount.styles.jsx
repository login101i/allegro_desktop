import styled from 'styled-components'

export const SectionInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${props => (props.extended ? '20px' : '0px')}
	width: 100%;
`;
export const Discount = styled.div`
  background: #0f7b1e;
  height: 16px;si
  padding: 4px 5px;
  margin-right: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OldPrice = styled.div`
	color: grey;
	text-decoration: line-through;
	font-size: 14px;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`;
export const Price = styled.div`
	font-size: 28px;
	font-weight: 600;
	color: rgb(76, 79, 70);
	color: var(--textColor);
	display: flex;
	flex-direction: row;
	vertical-align: bottom;
	line-height: 28px;
	display: inline-block;
	margin-top: 4px;
`;

export const Text = styled.div`
	color: purple;
	font-size: 14px;
	margin-left: -10px;
`;

export const Smart = styled.img`
	color: purple;
	height: 18px;
	display: flex;
	align-items: left;
	width: 100px;
	margin-left: -15px;
`;
export const PriceEnd = styled(Price)`
	font-size: 18px;
`;