import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import GavelIcon from "@mui/icons-material/Gavel";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckIcon from "@mui/icons-material/Check";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Checkbox from "@mui/material/Checkbox";
import { InputAdornment } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { newProduct, clearErrors } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { NEW_PRODUCT_RESET } from "../../src/redux/constants/productConstants";

import {
	Flex,
	Text,
	CustomIcon,
	Button,
	ImageComponent,
	CustomInput,
	Loader
} from "../components";

const MainContainer = styled.div`
	width: 80%;
	margin: 0 auto;
`;
const Container = styled.div`
	min-height: 100vh;
	background-color: var(--allegroLocalnieColor);
	display: flex;
	margin-top: 30px;
	width: 100%;
`;

const LeftPart = styled.div`
	margin-right: 30px;
	flex-direction: column;
	width: 40%;
	position: relative;
`;

const TopLeftCont = styled.div`
	height: 100px;
	border: 1px solid #7770bd;
	border-radius: 12px;
	padding: 12px 32px;
	display: flex;
	background-color: #edecf7;
	cursor: pointer;
	width: 700px;

	-webkit-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	-moz-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
`;

const BottomLeftCont = styled.div`
	height: auto;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	margin: 20px 0px;
	padding: 16px 32px;
	overflow: hidden;
	padding-right: 20%;
	width: 700px;

	background-color: white;
	position: relative;

	-webkit-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	-moz-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);

	margin-bottom: 200px;
`;

const BorderContainer = styled.div`
	border: 1px solid #e3e4e6;
	transform: translateX(-200px);
	width: 200%;
	margin: 20px 0px;
`;

const BlackDot = styled.div`
	height: 7px;
	width: 7px;
	background-color: black;
	border-radius: 50%;
	display: inline-block;
	margin-right: 8px;
`;

const WymaganePola = styled.div`
	position: absolute;
	bottom: 0px;
	right: 30px;
	font-size: 11px;
	color: grey;
`;
// ___________________________________________________
const RightPart = styled.div`
	position: absolute;
	top: 0px;
	left: 720px;
`;

const RightCont = styled.div`
position:fixed;
width:456px;
	height: auto;
		border-radius: 12px;
	padding:10px 20px
	border-radius: 12px;
	display: flex;
	background-color: white;
padding:30px 32px;
	display:flex;
	flex-direction:column;
	align-items:center;

	

	-webkit-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	-moz-box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
	box-shadow: 6px 3px 54px -39px rgba(66, 68, 90, 1);
`;
const RightContInfo = styled.div`
	position: absolute;
	bottom: -100px;
	left: 50%;
	transform: translate(-50%, 0%);
`;

const ProductState = styled.div`
	position: relative;
	border: 1px solid lightGrey;
	border-radius: 10px;
	padding: 16px;
	margin-bottom: 20px;
	cursor: pointer;

	-webkit-box-shadow: 2px 1px 54px -39px rgba(166, 68, 90, 0.6);
	-moz-box-shadow: 2px 1px 54px -39px rgba(166, 68, 90, 0.6);
	box-shadow: 2px 1px 54px -39px rgba(166, 68, 90, 0.6);
	&:hover {
		border: 1px solid darkGrey;
		transition: 0.3s;
	}
`;

const BorderWithArrow = styled(ProductState)`
	margin-top: 20px;
	&::after {
		content: " ";
		position: absolute;
		left: 25px;
		top: -9px;
		width: 16px;
		height: 16px;
		transform: rotate(45deg);
		border-top: 1px solid lightGrey;
		border-left: 1px solid lightGrey;
		background-color: white;
	}
	&:hover {
		border: 1px solid lightGrey;
	}
`;

const LoadImages = styled.input`
	background-color: #edecf7;
	color: #7770bd;
	cursor: pointer;
	outline: none;
	text-align: center;
	font-weight: 600;
	letter-spacing: 2px;
	text-transform: uppercase;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Open Sans, sans-serif;
	font-size: 14px;
	height: 40px;
	line-height: 21px;
	line-height: 40px;
	margin: 0;
	overflow: hidden;
	padding: 0px 24px;
	position: relative;
	text-decoration: none;
	text-size-adjust: 100%;
	vertical-align: middle;
	white-space: nowrap;
	z-index: 7999;

	width: auto;
	border-radius: 20px;
	font-weight: 500;

	&:hover {
		color: var(--linkColor);
		background-color: "green";
		transition: 0.3s;
	}
`;

const WystawPrzedmiot = () => {
	const [uzywany, setUzywany] = useState(false);
	const [bdb, setBdb] = useState(false);
	const [nowy, setNowy] = useState(false);
	const [dostawa, setDostawa] = useState(false);

	const stateProductHandler = (value) => {
		if (value === "uzywany") {
			setUzywany(true);
			setBdb(false);
			setNowy(false);
		} else if (value === "bdb") {
			setUzywany(false);
			setBdb(true);
			setNowy(false);
		} else {
			setUzywany(false);
			setBdb(false);
			setNowy(true);
		}
	};

	const [kupTeraz, setKupTeraz] = useState(false);
	const [licytacja, setLicytacja] = useState(false);
	const [darmowe, setDarmowe] = useState(false);
	const [infoPosition, setInfoPosition] = useState(0);

	console.log(infoPosition);

	const sellingTypeHandler = (value) => {
		if (value === "kup teraz") {
			setKupTeraz(true);
			setLicytacja(false);
			setDarmowe(false);
			setInfoPosition(0);
		} else if (value === "licytacja") {
			setKupTeraz(false);
			setLicytacja(true);
			setDarmowe(false);
			setInfoPosition(1);
		} else {
			setUzywany(false);
			setLicytacja(false);
			setDarmowe(true);
			setInfoPosition(2);
		}
	};

	const [range, setRange] = React.useState("false");

	const handleRange = (val) => {
		setRange(val);
	};
	const handleDostawa = (val) => {
		setDostawa(val);
	};

	const [wyroznij30, setWyroznij30] = useState(false);
	const [wyroznij14, setWyroznij14] = useState(false);
	const [wyroznij3, setWyroznij3] = useState(false);

	const wyroznijHandler = (value) => {
		if (value === "30") {
			setWyroznij3(true);
			setWyroznij14(false);
			setWyroznij30(true);
		} else if (value === "14") {
			setWyroznij3(false);
			setWyroznij14(true);
			setWyroznij30(false);
		} else {
			setWyroznij3(true);
			setWyroznij14(false);
			setWyroznij30(false);
		}
	};

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [stock, setStock] = useState(1);
	const [images, setImages] = useState([]);
	console.log(images);

	const dispatch = useDispatch();

	const onChange = (e) => {
		const files = Array.from(e.target.files);
		setImages([]);
		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setImages((oldArray) => [...oldArray, reader.result]);
				}
			};

			reader.readAsDataURL(file);
		});
	};

	const { user } = useSelector((state) => state.auth);
	const { loading, error, success } = useSelector((state) => state.newProduct);


	useEffect(() => {
		if (error) {
			console.log("Wystąpił błąd  !!! and clear errors za 3s");
			setTimeout(() => {
				dispatch(clearErrors());
			}, 5000);
		}

		if (success) {
			dispatch({ type: NEW_PRODUCT_RESET });
			setTitle("");
			setPrice("");
			setDescription("");
			setCategory("");
			setStock("");
			setImages([]);
			setKupTeraz(false);
			setLicytacja(false);
			setDarmowe(false);
			setInfoPosition(1);
			setWyroznij3(false);
			setWyroznij14(false);
			setWyroznij30(false);
		}
	}, [dispatch, error, success]);

	const submitHandler = (e) => {
		e.preventDefault();

		const productData = {
			title,
			price,
			description,
			category,
			seller: user.name,
			stock
		};

		const imagesArray = [];

		images.forEach((url) => {
			const imageUrl = { url };
			imagesArray.push(imageUrl);
		});
		productData.img = imagesArray;
		console.log(productData.img.length);
		dispatch(newProduct(productData));
	};

	const categoryHandler = (event) => {
		setCategory(event.target.value);
	};

	const rightPart = () => {
		const rightPartContent = [
			{
				title: "Kup teraz",
				icon: ShoppingBasketIcon,

				info: [
					{ info: "Kupujący zapłacą szybko dzięki płatnościom online" },
					{
						info: "Możliwość szybkiej dostawy – Allegro Paczkomaty InPost za 8,99 zł"
					},
					{
						info: "Ogłoszenie wyświetlimy na Lokalnie i Allegro bez limitu czasu"
					}
				],

				addFoto: "Dodaj zdjęcie",
				hint: "Dodaj wyróżnienie aby zwiększyć szansę sprzedaży",
				buttonText: "Wystaw jako Kup Teraz",
				color: "#ff5a00"
			},
			{
				title: "Licytacja",
				icon: GavelIcon,
				info: [
					{ info: "Kupujący zapłacą szybko dzięki płatnościom online" },
					{
						info: "Możliwość szybkiej dostawy – Allegro Paczkomaty InPost za 8,99 zł"
					},
					{
						info: "Ogłoszenie wyświetlimy na Lokalnie i Allegro bez limitu czasu"
					}
				],
				addFoto: "Dodaj zdjęcie",
				hint: "Dodaj wyróżnienie aby zwiększyć szansę sprzedaży",
				buttonText: "Wystaw jako Licytacja",
				color: "#7770bd"
			},
			{
				title: "Darmowe ogłoszenie",
				icon: PushPinIcon,
				info: [
					{ info: "Sposób zapłaty sam ustalasz z kupującym" },
					{
						info: "Ogłoszenie wyświetlimy na Lokalnie i Allegro bez limitu czasu"
					}
				],
				addFoto: "Dodaj zdjęcie",
				hint: "Dodaj wyróżnienie aby zwiększyć szansę sprzedaży",
				buttonText: "Wystaw jako Darmowe ogłoszenie",
				color: "#f7ae10"
			}
		];
		return (
			<RightPart>
				<RightCont>
					<Flex space fullWidth align>
						<Text color={rightPartContent[infoPosition].color} size={30} bold>
							{rightPartContent[infoPosition].title}
						</Text>
						<CustomIcon
							icon={rightPartContent[infoPosition].icon}
							size={60}
							color={rightPartContent[infoPosition].color}
						/>
					</Flex>
					<Flex column>
						{rightPartContent[infoPosition].info.map((item) => (
							<>
								<Flex align>
									<CustomIcon icon={CheckIcon} size={22} />
									<Text wrap>{item.info}</Text>
								</Flex>
							</>
						))}

						<Flex align style={{ marginBottom: "16px" }}>
							<CustomIcon icon={InfoOutlinedIcon} color="var(--allegroColor)" />
							<Text size={22} color="var(--allegroColor)">
								Dodaj zdjęcie
							</Text>
						</Flex>
					</Flex>
					{loading ? (
						<Loader />
					) : (
						<Button
							background="#C3C3C3"
							width="90%"
							borderRadius
							style={{
								padding: "16px 32px",
								height: "48px",
								marginTop: "16px"
							}}
							onClick={() => {
								setTitle("");
								submitHandler();
							}}
						>
							{rightPartContent[infoPosition].buttonText}
						</Button>
					)}
					{error && (
						<Text color="red">
							{" "}
							Wystąpił błąd. Proszę uzupełnić wszystkie wymagane pola.
						</Text>
					)}
					{success && <Text color="green"> Pomyślnie dodano produkt</Text>}

					<RightContInfo>
						<Flex column align>
							<Flex>
								<Text>Wystawiając przedmiot akceptujesz </Text>
								<Text color="var(--linkColor)">regulamin</Text>
							</Flex>
							<Flex>
								<Text>Możesz też wystawić przez</Text>
								<Text color="var(--linkColor)"> dotychczasowy formularz</Text>
							</Flex>
						</Flex>
					</RightContInfo>
				</RightCont>
			</RightPart>
		);
	};

	// ------------------------------------------------------------------
	// ------------------------------------------------------------------

	return (
		<MainContainer>
			<Container>
				<LeftPart>
					<TopLeftCont>
						<ImageComponent
							size={70}
							img="https://upload.wikimedia.org/wikipedia/commons/d/dd/Aparat_Icon.png"
							style={{ marginRight: "30px" }}
						/>
						<Flex column>
							<Text bold title="Zamień nietrafione prezenty!" size={28} />
							<Flex>
								<Text>Zganirj kasę i nawet 20 Monet.</Text>
								<Text color="var(--linkColor)">Sprawdź szczegóły</Text>
							</Flex>
						</Flex>
					</TopLeftCont>
					<BottomLeftCont>
						<Flex>
							<ImageComponent
								size={60}
								img="https://upload.wikimedia.org/wikipedia/commons/d/dd/Aparat_Icon.png"
								style={{ marginRight: "30px" }}
							/>
							<Flex column>
								<Text title="Dodaj zdjęcia pzedmiotu"></Text>
								<Text wrap>
									Możesz dodać do 15 zdjęć w formacie JPG, PNG, BMP, maks. 2MB
								</Text>
							</Flex>
						</Flex>
						<BorderContainer></BorderContainer>
						<Flex column align space style={{ height: "150px" }}>
							<Text
								color="#7770bd"
								title="	Przeciągnij i upuść zdjęcia tutaj"
							></Text>
							<Text>lub</Text>

							<LoadImages type="file" onChange={onChange} multiple />
							<Button
								color="#7770bd"
								bold
								background="#edecf7"
								borderRadius
								hovered
								type="file"
								onChange={onChange}
								multiple
							>
								Wybierz zdjęcia z dysku
							</Button>
						</Flex>
						<BorderContainer> </BorderContainer>
						<Flex column style={{ marginBottom: "20px" }}>
							<Text bold> Nazwa przedmiotu *</Text>
							<CustomInput
								required
								placeholder="Wpisz co chcesz sprzedać"
								borderRadius={10}
								onChange={(e) => setTitle(e.target.value)}
								multiline
								rows="2"
							/>
							<Text textAlign="right" size={16}>
								0/50
							</Text>
						</Flex>
						<Flex column style={{ marginBottom: "20px" }}>
							<Text bold> Opis przedmiotu</Text>
							<CustomInput
								placeholder="Powiedz kupującym coś więcej o przedmiocie"
								borderRadius={10}
								multiline
								required
								rows="10"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Flex>

						<Flex column style={{ marginBottom: "20px" }}>
							<FormControl>
								<Select
									value={category}
									onChange={categoryHandler}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
								>
									<MenuItem value="" disabled>
										<em>Wybierz kategorię</em>
									</MenuItem>
									<MenuItem value={"Pupil"}>Pupil</MenuItem>
									<MenuItem value={"Telefony"}>Telefony</MenuItem>
									<MenuItem value={"Perfumy"}>Perfumy</MenuItem>
									<MenuItem value={"Supermarket"}>Supermarket</MenuItem>
									<MenuItem value={"AGD"}>AGD</MenuItem>
									<MenuItem value={"Pupil"}>Pupil</MenuItem>
								</Select>
							</FormControl>

							<Text color="var(--grennLocalnie)">
								Przeglądaj wszystki kategorie
							</Text>

							<Text bold style={{ margin: "20px 0px" }}>
								{" "}
								Stan przedmiotu *
							</Text>
							<ProductState
								onClick={() => stateProductHandler("uzywany")}
								style={{
									border: uzywany ? "1px solid #f7ae10" : ""
								}}
							>
								<Flex space>
									<Text bold>Używany</Text>
									{uzywany && (
										<CustomIcon
											icon={ForumOutlinedIcon}
											size={20}
											color="#f7ae10"
										/>
									)}
								</Flex>
								<Text wrap color="grey">
									Widoczne ślady używania lub uszkodzenia, które zostały
									uwzględnione w opisie tego przedmiotu i/lub na zdjęciach.
								</Text>
							</ProductState>
							<ProductState
								onClick={() => stateProductHandler("bdb")}
								style={{
									border: bdb ? "1px solid #f7ae10" : ""
								}}
							>
								<Flex space>
									<Text bold>Bardzo dobry</Text>
									{bdb && (
										<CustomIcon
											icon={ForumOutlinedIcon}
											size={20}
											color="#f7ae10"
										/>
									)}
								</Flex>
								<Text wrap color="grey">
									W bardzo dobrym stanie technicznym i wizualnym. Nie nosi
									śladów używania lub są one znikome.
								</Text>
							</ProductState>
							<ProductState
								onClick={() => stateProductHandler("nowy")}
								style={{
									border: nowy ? "1px solid #f7ae10" : ""
								}}
							>
								<Flex space>
									<Text bold>Nowy</Text>
									{nowy && (
										<CustomIcon
											icon={ForumOutlinedIcon}
											size={20}
											color="#f7ae10"
										/>
									)}
								</Flex>
								<Text wrap color="grey">
									Fabrycznie nowy, nieużywany, nieuszkodzony, zapakowany w
									oryginalne opakowanie od producenta.
								</Text>
							</ProductState>
						</Flex>
						<BorderContainer> </BorderContainer>
						<Flex space>
							<Text title="cena przedmiotu*" />
							<Text title="Jak ustalić cenę?" color="var(--greenLocalnie)" />
						</Flex>
						<CustomInput
							borderRadius={10}
							placeholder="0,00"
							rightPart="zł"
							onChange={(e) => setPrice(e.target.value)}
							inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						></CustomInput>
						<Flex align>
							<Checkbox />
							<Text>Do negocjacji</Text>
						</Flex>

						<BorderWithArrow>
							<Text color="var(--greenLocalnie)">NOWOŚĆ! </Text>
							<Text wrap>
								Twoje ogłoszenie zostanie oznaczone jako “do negocjacji”, a
								kupujący będą mogli w prosty sposób składać swoje oferty cenowe.
							</Text>
						</BorderWithArrow>
						<Flex align>
							<Text>Chcesz sprzedać więcej niż jeden taki przedmiot?</Text>
							<Button background="#edecf7" borderRadius color="blue">
								dodaj przedmioty
							</Button>
						</Flex>
						<BorderContainer> </BorderContainer>
						<Text title="Lokalizacja przedmiotu" />
						<Text title="adres" />
						{[
							"Kolonia Krzywosadz, Dobre-Kolonia",
							"Szostka 26, Radziejów",
							"Sędzin 7, Sędzin",
							"Zygmunta Kurka 13, Inowtoclaw",
							"Nowa lokalizacja"
						].map((rang) => (
							<Flex align>
								<Checkbox
									value={rang}
									checked={rang === range}
									onClick={() => handleRange(rang)}
								/>
								<Text>{rang}</Text>
							</Flex>
						))}
						<CustomInput
							placeholder="wpisz adres..."
							borderRadius={10}
							rightPart={
								<InputAdornment position="end">
									<ForumOutlinedIcon sx={{ color: "var(--greenLocalnie)" }} />
								</InputAdornment>
							}
							number
						/>
						<Text
							textAlign="right"
							color="var(--greenLocalnie)"
							title="użyj mojej bieżącej lokalizacji"
						/>
						<Flex space>
							<Flex align>
								<Checkbox />
								<Text>Pokaż numer telefonu</Text>
							</Flex>

							<CustomInput borderRadius={10} width="150px"></CustomInput>
						</Flex>

						<Text title="Metody dostawy*" />
						<Flex space>
							<Text subTitle="Najpopularniejsze" />
							<Text subTitle="(uzupełniliśmy sugerowany koszt)" />
						</Flex>
						<Flex space>
							<Flex align>
								<Checkbox checked={true} />
								<Text>Allegro Paczkomaty InPost</Text>
							</Flex>

							<CustomInput
								placeholder="8,99"
								rightPart="zł"
								width="150px"
								borderRadius={10}
							/>
						</Flex>
						<Text wrap style={{ padding: "20px" }}>
							Nadaj przesyłkę w dowolnym paczkomacie InPost! Za wysyłkę
							zapłacisz zawsze 8,99 zł, niezależnie od rozmiaru paczki. Możesz
							zwiększyć atrakcyjność oferty obniżając w polu powyżej kwotę,
							którą zapłaci Ci za tę wysyłkę kupujący.
						</Text>
						<Text textAlign="right" color="var(--greenLocalnie)">
							Dowiedz się więcej
						</Text>

						{[
							{ text: "Przesyłka kurierska - przedpłata", price: "11,50" },
							{ text: "List polecony priorytetowy", price: "8,40" },
							{ text: "Paczka pocztowa priorytetowa", price: "14,00" }
						].map((dostaw) => (
							<Flex align space>
								<Flex align>
									{" "}
									<Checkbox
										value={dostaw.text}
										checked={dostaw.text === dostawa}
										onClick={() => handleDostawa(dostaw.text)}
									/>
									<Text>{dostaw.text}</Text>
								</Flex>

								<CustomInput
									width="100px"
									borderRadius={10}
									placeholder={dostaw.price}
									rightPart="zł"
								/>
							</Flex>
						))}

						<Flex align space>
							<Flex align>
								<Checkbox />
								<Text textAlign="right">
									Odbiór osobity - płatnośćprzy odbiorze
								</Text>
							</Flex>
							<Text>0 zł</Text>
						</Flex>

						<Text
							bold
							color="var(--greenLocalnie)"
							titole="Rozwiń więcej metod dostawy"
						/>

						<Text bold titole="Wystaw jako" />

						<Flex column>
							<ProductState
								onClick={() => sellingTypeHandler("kup teraz")}
								style={{
									border: kupTeraz ? "1px solid #ff5a00" : ""
								}}
							>
								<Flex space>
									<Text size={20} color="#ff5a00">
										Kup Teraz
									</Text>
									{kupTeraz && (
										<CustomIcon
											icon={ForumOutlinedIcon}
											size={20}
											color="#ff5a00"
										/>
									)}
								</Flex>
								<Text wrap>
									Widoczne na Allegro Lokalnie i Allegro Kupujący mogą zapłacić
									online
								</Text>
							</ProductState>
							<ProductState
								onClick={() => sellingTypeHandler("licytacja")}
								style={{
									border: licytacja ? "1px solid #7770bd" : ""
								}}
							>
								<Flex space>
									<Text color="#7770bd" size={20}>
										Licytacja
									</Text>
									{licytacja && (
										<CustomIcon
											icon={ForumOutlinedIcon}
											size={20}
											color="#7770bd"
										/>
									)}
								</Flex>
								<Text wrap>
									Widoczna przez 7 dni na Allegro Lokalnie i Allegro Kupujący
									mogą zapłacić online
								</Text>
							</ProductState>

							<ProductState
								onClick={() => sellingTypeHandler("darmowe ogłoszenie")}
								style={{
									border: darmowe ? "1px solid #f7ae10" : ""
								}}
							>
								<Flex space>
									<Text size={20} color="#f7ae10">
										Darmowe Ogłoszenie
									</Text>
									{darmowe && (
										<CustomIcon
											icon={ForumOutlinedIcon}
											size={20}
											color="#f7ae10"
										/>
									)}
								</Flex>
								<Text wrap>
									Widoczne na Allegro Lokalnie i Allegro Sposób zapłaty sam
									ustalasz z kupującym
								</Text>
							</ProductState>
						</Flex>

						<Flex bold title="Wyróżnij swoje ogłoszenie"></Flex>
						<Text wrap borderBottom>
							Jeśli wyróżnisz ogłoszenie, będzie ono widoczne wyżej w wynikach
							wyszukiwania. Możesz wybrać jedną z poniższych opcji:
						</Text>
						<Text title="Nowe, lepsze wyróżnienia!" />
						<Flex align>
							<BlackDot />
							<Text>wyróżnienie aż na 30 dni</Text>
							<Text
								background="#0fb91b"
								color="white"
								style={{ marginLeft: "20px" }}
								subTitle="	Nowość!"
							></Text>
						</Flex>
						<Flex align>
							<BlackDot />
							<Text>niższe ceny pozostałych opcji</Text>
						</Flex>
						<Flex align>
							<Text>Szczegóły w</Text>
							<Text color="var(--greenLocalnie)" hovered>
								regulaminie promocji
							</Text>
						</Flex>
						<Flex column>
							<ProductState
								onClick={() => wyroznijHandler("30")}
								style={{
									border: wyroznij30 ? "1px solid #f7ae10" : ""
								}}
							>
								<Flex align>
									<CustomIcon icon={AutoGraphIcon} size={40} color="#f7ae10" />
									<Flex column>
										<Text>Wyróżnij na Allegro Lokalnie i Allegro</Text>
										<Text size={16}>przez 30 dni</Text>
									</Flex>

									<Flex>
										<Text style={{ textDecoration: "line-through" }}>
											13,90 zł
										</Text>
										<Text bold>1.00 zł</Text>

										{wyroznij30 && (
											<CustomIcon icon={CheckIcon} size={20} color="#f7ae10" />
										)}
									</Flex>
								</Flex>
								<Text
									color="grey"
									subTitle="Nawet do 10x więcej wyświetleń i do 5x większa szansa na
									sprzedaż!"
								></Text>
							</ProductState>

							<ProductState
								onClick={() => wyroznijHandler("14")}
								style={{
									border: wyroznij14 ? "1px solid #f7ae10" : ""
								}}
							>
								<Flex align>
									<CustomIcon icon={SpeedIcon} size={40} color="#f7ae10" />
									<Flex column>
										<Text>Wyróżnij na Allegro Lokalnie i Allegro</Text>
										<Text size={16}>przez 10 dni</Text>
									</Flex>

									<Flex>
										<Text style={{ textDecoration: "line-through" }}>
											11,90 zł
										</Text>
										<Text bold>1.00 zł</Text>

										{wyroznij14 && (
											<CustomIcon icon={CheckIcon} size={20} color="#f7ae10" />
										)}
									</Flex>
								</Flex>
								<Text
									subTitle="Nawet do 7x więcej wyświetleń i do 3x większa szansa na
									sprzedaż!"
								></Text>
							</ProductState>

							<ProductState
								onClick={() => stateProductHandler("uzywany")}
								style={{
									border: wyroznij3 ? "1px solid #f7ae10" : ""
								}}
							>
								<Flex align>
									<CustomIcon
										icon={LocalFireDepartmentIcon}
										size={40}
										color="#f7ae10"
									/>
									<Flex column>
										<Text>Wyróżnij na Allegro Lokalnie i Allegro</Text>
										<Text size={16}>przez 10 dni</Text>
									</Flex>

									<Flex>
										<Text style={{ textDecoration: "line-through" }}>
											4,90 zł
										</Text>
										<Text bold>1.00 zł</Text>

										{wyroznij3 && (
											<CustomIcon icon={CheckIcon} size={20} color="#f7ae10" />
										)}
									</Flex>
								</Flex>
								<Text
									color="grey"
									subTitle="Nawet do 3x więcej wyświetleń!"
								></Text>
							</ProductState>
						</Flex>

						<WymaganePola>* Oznacza wymagane pola</WymaganePola>
					</BottomLeftCont>

					{rightPart(infoPosition)}
				</LeftPart>

				{/* --------------------------------------------------------- */}
			</Container>
		</MainContainer>
	);
};

export default WystawPrzedmiot;
