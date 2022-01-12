import { useCallback, useState } from 'react';

const useClientRect = () => {
	const [rect, setRect] = useState(null);

	const ref = useCallback(node => {
		if (node !== null) {
			setRect(node.getBoundingClientRect());
		}
	}, []);

	return [rect, ref];
};

export default useClientRect;
