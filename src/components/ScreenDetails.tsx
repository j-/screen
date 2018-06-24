import * as React from 'react';
import { ImmutableScreen } from '../screen';
import Size from './Size';
import './ScreenDetails.css';
import SizeAvailable from './SizeAvailable';

export interface Props {
	screen: ImmutableScreen;
}

function availableIsSignificant (screen: ImmutableScreen) {
	return screen.availWidth !== screen.width || screen.availHeight !== screen.height;
}

const ScreenDetails: React.StatelessComponent<Props> = ({ screen }) => (
	<div className="ScreenDetails">
		<div className="ScreenDetails-size">
			<Size screen={screen} />
		</div>
		&nbsp;
		{availableIsSignificant(screen) && <div className="ScreenDetails-available">
			(<SizeAvailable screen={screen} /> available)
		</div>}
	</div>
);

export default ScreenDetails;
