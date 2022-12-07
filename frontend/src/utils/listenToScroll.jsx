export const listenToScroll = (setIsPaypalShow) => {
	const heightToHideFrom = 400;
	const winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	if (winScroll > heightToHideFrom) {
		setIsPaypalShow(true);
	}
};
