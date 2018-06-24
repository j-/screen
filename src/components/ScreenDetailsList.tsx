import * as React from 'react';
import { ImmutableScreen, isEqual } from '../screen';
import ScreenDetails from './ScreenDetails';

export interface Props {
	screens: ImmutableScreen[];
	latest: ImmutableScreen;
}

const ScreenDetailsList: React.StatelessComponent<Props> = ({ screens, latest }) => (
	<div className="ScreenDetailsList">
		{screens.map((screen, i) => (
			<ScreenDetails
				key={i}
				index={i}
				screen={screen}
				isLatest={isEqual(screen, latest)}
			/>
		))}
	</div>
);

export default ScreenDetailsList;
