import { colors } from "./theme";
import icons from "./icons";

function randomIcon() {
	var random =
		Object.keys(icons)[Math.floor(Math.random() * Object.keys(icons).length)];

	return icons[random];
}

export const portfolio = {
	balance: "12,724.33",
	changes: "+2.36%"
};

export const categoriesData = [
	{
		id: 1,
		image:
			"https://a.allegroimg.com/original/12d19d/a165831145bbb7717c71622b5342",
		text: "Allegro Smart!"
	},
	{
		id: 2,
		image:
			"https://a.allegroimg.com/original/12f06f/06c6fa154dd3a1e9728d5d0d4461",
		text: "Kup i odbierz prezent"
	},
	{
		id: 3,
		image:
			"https://a.allegroimg.com/original/122e02/aaec080448d1abf007cf4bd7a644",
		text: "Sprawdź Allegro Pay"
	},
	{
		id: 4,
		image:
			"https://a.allegroimg.com/original/12a614/8936f2e7423baecd12b6de3a3a27",
		text: "Jesienny relaks"
	},
	{
		id: 5,
		image:
			"https://a.allegroimg.com/original/121754/d83d42cd42f2a907274a5c25c39a",
		text: "Opony zimowe"
	},
	{
		id: 6,
		image:
			"https://a.allegroimg.com/original/126276/36f8a3c94a9199f94fd1c8c69d1c",
		text: "Dla Ciebie i pupila"
	},
	{
		id: 7,
		image:
			"https://a.allegroimg.com/original/12dc35/abaf45694b9ea454f515d492a763",
		text: "Super cena!"
	},
	{
		id: 8,
		image:
			"https://a.allegroimg.com/original/1216b5/8a3e5ab549859d5de2ce0f64aa83",
		text: "Światło dla Ciebie"
	}
];

export const categories = [
	{
		id: 1,
		icon: randomIcon(),
		borderColor: colors.red,
		categoryTitle: "Elektronika"
	},
	{
		id: 2,
		icon: randomIcon(),
		borderColor: colors.green,
		categoryTitle: "Moda"
	},
	{
		id: 3,
		icon: randomIcon(),
		borderColor: colors.yellow,
		categoryTitle: "Dom i Ogród"
	},
	{
		id: 4,
		icon: randomIcon(),
		borderColor: colors.allegroColor,
		categoryTitle: "Dziecko"
	},
	{
		id: 5,
		icon: randomIcon(),
		borderColor: colors.pink,
		categoryTitle: "Supermarket"
	},
	{
		id: 6,
		icon: randomIcon(),
		borderColor: colors.twitterColor,
		categoryTitle: "Uroda"
	},
	{
		id: 7,
		icon: randomIcon(),
		borderColor: colors.secondary,
		categoryTitle: "Zdrowie"
	},
	{
		id: 8,
		icon: randomIcon(),
		borderColor: colors.linkColor,
		categoryTitle: "Kultura i rozrywka"
	},
	{
		id: 8,
		icon: randomIcon(),
		borderColor: colors.gray,
		categoryTitle: "Sport i turystyka"
	},
	{
		id: 9,
		icon: randomIcon(),
		borderColor: colors.lightBlue,
		categoryTitle: "Motoryzacja"
	},
	{
		id: 10,
		icon: randomIcon(),
		borderColor: colors.twitterColor,
		categoryTitle: "Uroda"
	},
	{
		id: 11,
		icon: randomIcon(),
		borderColor: colors.secondary,
		categoryTitle: "Zdrowie"
	},
	{
		id: 12,
		icon: randomIcon(),
		borderColor: colors.linkColor,
		categoryTitle: "Kultura i rozrywka"
	},
	{
		id: 13,
		icon: randomIcon(),
		borderColor: colors.gray,
		categoryTitle: "Sport i turystyka"
	},
	{
		id: 14,
		icon: randomIcon(),
		borderColor: colors.lightBlue,
		categoryTitle: "Motoryzacja"
	}
];

export const transactionHistory = [
	{
		id: 1,
		description: "Sold Ethereum",
		amount: -2.0034,
		currency: "ETH",
		type: "S", // S - Sold, B - Bought
		date: "14:20 12 Apr"
	},
	{
		id: 2,
		description: "Bought Ethereum",
		amount: 2.0034,
		currency: "ETH",
		type: "B",
		date: "14:20 12 Apr"
	},
	{
		id: 3,
		description: "Sold Ethereum",
		amount: -2.0034,
		currency: "ETH",
		type: "S",
		date: "14:20 12 Apr"
	},
	{
		id: 4,
		description: "Bought Ethereum",
		amount: 2.0034,
		currency: "ETH",
		type: "B",
		date: "14:20 12 Apr"
	},
	{
		id: 5,
		description: "Bought Ethereum",
		amount: 2.0034,
		currency: "ETH",
		type: "B",
		date: "14:20 12 Apr"
	},

	{
		id: 6,
		description: "Bought Ethereum",
		amount: 2.0034,
		currency: "ETH",
		type: "B",
		date: "14:20 12 Apr"
	},
	{
		id: 7,
		description: "Bought Ethereum",
		amount: 2.0034,
		currency: "ETH",
		type: "B",
		date: "14:20 12 Apr"
	},
	{
		id: 8,
		description: "Bought Ethereum",
		amount: 2.0034,
		currency: "ETH",
		type: "B",
		date: "14:20 12 Apr"
	},
	{
		id: 9,
		description: "Bought Ethereum",
		amount: 2.0034,
		currency: "ETH",
		type: "B",
		date: "14:20 12 Apr"
	}
];

const chartOptions = [
	{
		id: 1,
		label: "1 hr"
	},
	{
		id: 2,
		label: "3 Days"
	},
	{
		id: 3,
		label: "1 Week"
	},
	{
		id: 4,
		label: "1 Month"
	},
	{
		id: 5,
		label: "3 Months"
	}
];

export const productsLocaly = {
	success: true,
	productsCount: 3,
	filteredProductsCount: 2,
	message: "This is all products from DB",
	products: [
		{
			_id: "61c10a6b74d8b1a84d61a97d",
			title: "Grill elektryczny Tefal Inicio GC241D38 2000 W",
			price: 209,
			oldPrice: 0,
			discount: 0,
			description:
				"Pyszne jedzenie jak z restauracji! Dzięki temu, wielofunkcyjnemu grillowi Inicio od Tefal możesz cieszyć się doskonałym grillowym jedzeniem oraz pysznym panini jak z restauracji.  Nieprzywierająca powłoka na płytach uławia czyszczenie, a moc 2000 W przyspiesza grillowanie. Pionowa konstrukcja ułatwia przechowywanie i z łatwością dopasuje się do każdej kuchni.",
			ratings: 4.5,
			img: [
				{
					url: "https://a.allegroimg.com/s720/112f5c/303735994203ba80b04af8491d3a/Grill-elektryczny-Tefal-Inicio-GC241D38-2000-W",
					_id: "61c10a6b74d8b1a84d61a97e"
				},
				{
					url: "https://www.cashless.pl/system/uploads/ckeditor/pictures/2130/content_allegro_stara_ikona.jpg",
					_id: "61cdf3abb36a3fa27041d670"
				}
			],
			category: "AGD",
			seller: "MarkoAGD",
			stock: 15,
			numOfReviews: 0,
			reviews: [],
			createdAt: "2021-12-20T22:57:47.379Z",
			updatedAt: "2021-12-20T22:57:47.379Z",
			__v: 0
		},
		{
			_id: "61c10b44649cdf618b815c43",
			title: "Purina GOURMET GOLD wołowina i kurczak 85g",
			price: 2.19,
			oldPrice: 0,
			discount: 0,
			description:
				"Purina GOURMET GOLD Casserole wołowina i kurczak jest pełnowartościowym daniem, które możesz z powodzeniem podawać swojemu kotu jako uzupełnienie karmy suchej.Dzięki połączeniu mięs pokarm stanowi źródło białka, dzięki któremu Twój pupil zdobędzie siły, by zmierzyć się z wyzwaniami dnia codziennego. Zaskocz swojego mruczka extra-mięsnym smakiem z dodatkiem sosu pomidorowego! Bo każdy kot chce mieć wiele smakowitych możliwości. Dawkowanie: Dorosłemu kotu ważącemu ok 3,5 kg zaleca się podawać do 3 puszek dziennie w postaci co najmniej 2 posiłkówodawać w temperaturze pokojowej.",
			ratings: 4,
			img: [
				{
					url: "https://a.allegroimg.com/s720/032329/b0125bc34b7b926154f6ce86ccdf/Purina-GOURMET-GOLD-wolowina-i-kurczak-85g",
					_id: "61c10b44649cdf618b815c44"
				}
			],
			category: "Pupil",
			seller: "Gourmet",
			stock: 188,
			numOfReviews: 0,
			reviews: [],
			createdAt: "2021-12-20T23:01:24.791Z",
			updatedAt: "2021-12-20T23:01:24.791Z",
			__v: 0
		}
	],
	resPerPage: 2
};

const dummyData = {
	portfolio,
	categoriesData,
	transactionHistory,
	chartOptions,
	categories
};

export default dummyData;
