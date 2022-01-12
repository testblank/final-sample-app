import React from 'react';
import { ColorGroup } from './ColorGroup';

export default {
	title: 'General/Colors',
	parameters: {
		viewMode: 'docs',
		previewTabs: {
			canvas: { hidden: true },
		},
	},
};

export const All = () => <ColorGroup />;
