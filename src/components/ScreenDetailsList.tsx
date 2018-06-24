import * as React from 'react';
import { ImmutableScreen, isEqual } from '../screen';
import ColorIcon from './ColorIcon';
import ScreenDetails from './ScreenDetails';
import * as classNames from 'classnames';
import './ScreenDetailsList.css';

export interface Props {
	screens: ImmutableScreen[];
	latest: ImmutableScreen;
}

const ScreenDetailsList: React.StatelessComponent<Props> = ({ screens, latest }) => (
	<div className="ScreenDetailsList">
		{screens.map((screen, i) => (
			<div
				key={i}
				className={classNames('ScreenDetailsList-item', {
					'ScreenDetailsList-item--latest': isEqual(screen, latest),
				})}
			>
				<ColorIcon index={i} />
				<ScreenDetails screen={screen} />
			</div>
		))}
	</div>
);

export default ScreenDetailsList;
