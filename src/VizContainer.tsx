import * as React from 'react';
import { Subscription } from 'rxjs';
import { ImmutableScreen, getDetails, isEqual } from './screen';
import { detect } from './detect';
import { uniqWith } from 'ramda';
import { Viz } from './Viz';

const uniqueScreens = uniqWith(isEqual);

interface State {
	screens: ImmutableScreen[];
}

export default class VizContainer extends React.Component<{}, State> {
	private screens$: Subscription;

	state: State = {
		screens: [],
	}

	componentWillMount () {
		this.addScreen(getDetails(screen));
		this.screens$ = detect.subscribe(this.addScreen);
	}

	componentWillUnmount () {
		this.screens$.unsubscribe();
	}

	render () {
		return <Viz screens={this.state.screens} />;
	}

	private addScreen = (screen: ImmutableScreen) => {
		this.setState((state) => ({
			screens: uniqueScreens([...state.screens, screen]),
		}));
	};
}
