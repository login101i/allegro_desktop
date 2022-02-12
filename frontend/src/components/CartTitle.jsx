import { Helmet } from "react-helmet";

const CartTitle = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keyword" content={keywords} />
		</Helmet>
	);
};

CartTitle.defaultProps = {
	title: "Allegro",
	description: "Kupuj online.",
	keywords: "elektornika, laptopy, telefony"
};

export default CartTitle;
