import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

export const conditionReducer = (state, action) => {
	switch (action.type) {
		case 'uzywany':
			return {
				uzywany: true,
				bdb: false,
				nowy: false,
			};
		case 'bdb':
			return {
				uzywany: false,
				bdb: true,
				nowy: false,
			};
		case 'nowy':
			return {
				uzywany: false,
				bdb: false,
				nowy: true,
			};

		default:
			return state;
	}
};

export const typeOfSellingReducer = (state, action) => {
	switch (action.type) {
		case 'kup teraz':
			return {
				kupTeraz: true,
				licytacja: false,
				darmowe: false,
				infoPosition: 0,
			};
		case 'licytacja':
			return {
				kupTeraz: false,
				licytacja: true,
				darmowe: false,
				infoPosition: 1,
			};
		case 'darmowe':
			return {
				kupTeraz: false,
				licytacja: false,
				darmowe: true,
				infoPosition: 2,
			};
		default:
			return state;
	}
};

export const wyroznijReducer = (state, action) => {
	switch (action.type) {
		case '30':
			return {
				wyroznij30: true,
				wyroznij14: false,
				wyroznij3: false,
			};
		case '14':
			return {
				wyroznij30: false,
				wyroznij14: true,
				wyroznij3: false,
			};
		case '3':
			return {
				wyroznij30: false,
				wyroznij14: false,
				wyroznij3: true,
			};
		default:
			return state;
	}
};

export const LoadImages = (e, setImages) => {
	const files = Array.from(e.target.files);
	console.log(files);
	setImages([]);
	files.forEach(file => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setImages(oldArray => [...oldArray, reader.result]);
			}
		};
		reader.readAsDataURL(file);
	});
};

export const rightPartContent = [
	{
		title: 'Kup teraz',
		icon: ShoppingBasketOutlinedIcon,

		info: [
			{
				info: 'Kupujący zapłacą szybko dzięki płatnościom online',
			},
			{
				info: 'Możliwość szybkiej dostawy – Allegro Paczkomaty InPost za 8,99 zł',
			},
			{
				info: 'Ogłoszenie wyświetlimy na Lokalnie i Allegro bez limitu czasu',
			},
		],
		addFoto: 'Dodaj zdjęcie',
		hint: 'Dodaj wyróżnienie aby zwiększyć szansę sprzedaży',
		buttonText: 'Wystaw jako Kup Teraz',
		color: '#ff5a00',
	},
	{
		title: 'Licytacja',
		icon: GavelOutlinedIcon,
		info: [
			{
				info: 'Kupujący zapłacą szybko dzięki płatnościom online',
			},
			{
				info: 'Możliwość szybkiej dostawy – Allegro Paczkomaty InPost za 8,99 zł',
			},
			{
				info: 'Ogłoszenie wyświetlimy na Lokalnie i Allegro bez limitu czasu',
			},
		],
		addFoto: 'Dodaj zdjęcie',
		hint: 'Dodaj wyróżnienie aby zwiększyć szansę sprzedaży',
		buttonText: 'Wystaw jako Licytacja',
		color: '#7770bd',
	},
	{
		title: 'Darmowe ogłoszenie',
		icon: PushPinOutlinedIcon,
		info: [
			{ info: 'Sposób zapłaty sam ustalasz z kupującym' },
			{
				info: 'Ogłoszenie wyświetlimy na Lokalnie i Allegro bez limitu czasu',
			},
		],
		addFoto: 'Dodaj zdjęcie',
		hint: 'Dodaj wyróżnienie aby zwiększyć szansę sprzedaży',
		buttonText: 'Wystaw jako Darmowe',
		color: '#f7ae10',
	},
];
