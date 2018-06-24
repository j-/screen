import * as React from 'react';
import { ImmutableScreen } from '../screen';
import './ScreenDetails.css';

export interface Props {
	screen: ImmutableScreen;
}

const ScreenDetails: React.StatelessComponent<Props> = ({ screen }) => (
	<div className="ScreenDetails">
		{screen.width}x{screen.height}
	</div>
);

export default ScreenDetails;
