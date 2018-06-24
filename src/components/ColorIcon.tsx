import * as React from 'react';
import { getColor } from '../color';

export interface Props {
	index: number;
}

const ColorIcon: React.StatelessComponent<Props> = ({ index }) => (
	<div className="ColorIcon" style={{ backgroundColor: getColor(index) }} />
);

export default ColorIcon;
