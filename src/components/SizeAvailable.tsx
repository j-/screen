import * as React from 'react';
import { ImmutableScreen } from '../screen';

export interface Props {
	screen: ImmutableScreen;
}

const SizeAvailable: React.StatelessComponent<Props> = ({ screen }) => (
	<span className="SizeAvailable">
		{screen.availWidth}x{screen.availHeight}
	</span>
);

export default SizeAvailable;
