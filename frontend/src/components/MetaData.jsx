import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keyword" content={keywords} />
		</Helmet>
	);
};

MetaData.defaultProps = {
	title: "Allegro",
	description: "Kupuj online.",
	keywords: "elektornika, laptopy, telefony"
};

export default MetaData;
