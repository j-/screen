import * as React from 'react';
import { ImmutableScreen } from '../screen';
import './SizeAvailable.css';

export interface Props {
	screen: ImmutableScreen;
}

function getTitle (left: number, right: number) {
	if (left === right) {
		// No difference. Do not assign a title.
		return '';
	}
	return `Difference of ${Math.abs(left - right)} pixels`;
}

const SizeAvailable: React.StatelessComponent<Props> = ({ screen }) => (
	<span className="SizeAvailable">
		<span
			className="SizeAvailable-width"
			title={getTitle(screen.availWidth, screen.width)}
		>
			{screen.availWidth}
		</span>
		x
		<span
			className="SizeAvailable-height"
			title={getTitle(screen.availHeight, screen.height)}
		>
			{screen.availHeight}
		</span>
	</span>
);

export default SizeAvailable;
