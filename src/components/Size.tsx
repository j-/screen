import * as React from 'react';
import { ImmutableScreen } from '../screen';

export interface Props {
	screen: ImmutableScreen;
}

const Size: React.StatelessComponent<Props> = ({ screen }) => (
	<span className="Size">
		{screen.width}x{screen.height}
	</span>
);

export default Size;
