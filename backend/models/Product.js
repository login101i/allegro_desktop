const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Proszę wprowadź nazwę produktu"],
			unique: true,
			maxlength: [100, "Proszę wprowadź max 100 znaków w tytule."]
		},
		price: {
			type: Number,
			required: [true, "Proszę wprowadź cenę produktu"],
			maxlength: [5, "Proszę wprowadź max 5 cyfr"],
			default: 0.0
		},
		oldPrice: {
			type: Number,
			required: false,
			maxlength: [5, "Proszę wprowadź max 5 cyfr"],
			default: 0
		},
		discount: {
			type: Number,
			required: false,
			maxlength: [2, "Proszę wprowadź max 2 cyfry"],
			default: 0
		},
		description: {
			type: String,
			required: [true, "Proszę wprowadź opis produktu"]
		},
		ratings: {
			type: Number,
			default: 0
		},

		img: [
			{
				url: {
					type: String,
					default:
						"https://www.cashless.pl/system/uploads/ckeditor/pictures/2130/content_allegro_stara_ikona.jpg"
				}
			}
		],

		category: {
			type: String,
			required: [true, "Proszę wprowadź kategorię dla tego produktu"],
			enum: {
				values: [
					"Laptopy",
					"Telefony",
					"Perfumy",
					"Supermarket",
					"AGD",
					"Pupil"
				],
				message: "Proszę wybierz poprawną kategorię dla produktu."
			}
		},
		seller: {
			type: String,
			required: [true, "Proszę podać nazwę sprzedawcy"]
		},
		stock: {
			type: Number,
			required: [false, "Proszę wprowadź ilość magazynową produkut"],
			maxlength: [4, "Proszę wprowadź max 4 cyfr"],
			default: 0
		},

		numOfReviews: {
			type: Number,
			default: 0
		},

		reviews: [
			{
				name: {
					type: String,
					required: false
				},
				rating: {
					type: Number,
					required: false
				},
				comment: {
					type: String,
					required: false
				}
			}
		],

		createdAt: {
			type: Date,
			default: Date.now
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
