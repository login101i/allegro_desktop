import React from "react";
import styled from "styled-components";

import WeekOcasion1 from "../../assets/pictures/WeekOcasion1.png";
import WeekOcasion2 from "../../assets/pictures/WeekOcasion2.png";
import BorderAndTitle from "../BorderAndTitle";

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	overflow: hidden;
	padding: 20px 10px;
`;

const Title = styled.div`
	font-weight: 600;
	text-align: center;
	font-size: 20px;
	margin-bottom: 30px;
`;

const SectionContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	margin: 6px 5px;
`;

const SectionInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const FlexRow = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
const Price = styled.div`
	font-size: 33px;
	font-weight: 600;
`;
const Smart = styled.div`
	color: purple;
	font-size: 18px;
`;

const ImageContainer = styled.div`
	height: 70%;
`;
const Image = styled.img`
	height: 90px;

	width: auto;
	object-fit: cover;
	padding: 5px;
`;

const Description = styled.div`
	text-decoration: uppercase;
	font-size: 14px;
	color: grey;
`;
const Center = () => {
	return (
		<Container>
			<Title>Z super ceną zaoszczędzisz</Title>
			<SectionContainer>
				<Image src={WeekOcasion1} />
				<SectionInfo>
					<Price>608,89zł</Price>
					<Smart>Smart z kurierem</Smart>
					<Description>
						Monitor Acer NITRO RG420 IPS 1 ms FreeSync cienki
					</Description>
				</SectionInfo>
			</SectionContainer>

			<SectionContainer>
				<Image src={WeekOcasion2} />
				<SectionInfo>
					<Price>608,89zł</Price>
					<Smart>Smart z kurierem</Smart>
					<Description>
						Monitor Acer NITRO RG420 IPS 1 ms FreeSync cienki
					</Description>
				</SectionInfo>
			</SectionContainer>

			<SectionContainer>
				<Image src={WeekOcasion1} />
				<SectionInfo>
					<Price>608,89zł</Price>
					<Smart>Smart z kurierem</Smart>
					<Description>
						Monitor Acer NITRO RG420 IPS 1 ms FreeSync cienki
					</Description>
				</SectionInfo>
			</SectionContainer>

			<BorderAndTitle title="Zobacz więcej" />
		</Container>
	);
};

export default Center;
