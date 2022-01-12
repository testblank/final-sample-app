import { useLayoutEffect, useState, useCallback } from 'react';

const useWindowSize = () => {
	const [size, setSize] = useState({
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight,
	});

	const updateSize = useCallback(() => {
		setSize({
			innerWidth: window.innerWidth,
			innerHeight: window.innerHeight,
		});
	}, []);

	useLayoutEffect(() => {
		window.addEventListener('resize', updateSize);
		updateSize();

		return () => {
			window.removeEventListener('resize', updateSize);
		};
	}, [updateSize]);

	return size;
};

export default useWindowSize;
