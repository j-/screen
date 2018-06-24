import * as React from 'react';
import { ImmutableScreen } from '../screen';
import ColorIcon from './ColorIcon';
import './ScreenDetails.css';

export interface Props {
	screen: ImmutableScreen;
	isLatest: boolean;
	index: number;
}

const ScreenDetails: React.StatelessComponent<Props> = (props) => (
	<div className="ScreenDetails">
		<ColorIcon index={props.index} />
		{props.screen.width}x{props.screen.height}
	</div>
);

export default ScreenDetails;
