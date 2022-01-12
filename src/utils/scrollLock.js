const body = document.querySelector('body');
let scrollPosition = 0;

const scrollLock = (() => {
	const enable = () => {
		scrollPosition = window.pageYOffset;
		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.top = `-${scrollPosition}px`;
		body.style.width = '100%';
	};
	const disable = () => {
		body.style.removeProperty('overflow');
		body.style.removeProperty('position');
		body.style.removeProperty('top');
		body.style.removeProperty('width');
		window.scrollTo(0, scrollPosition);
	};

	return {
		enable,
		disable,
	};
})();

export default scrollLock;
