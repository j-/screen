import * as React from 'react';
import { Subscription } from 'rxjs';
import { ImmutableScreen, getDetails, isEqual } from './screen';
import { detect } from './detect';
import { uniqWith } from 'ramda';
import { Viz } from './Viz';

const uniqueScreens = uniqWith(isEqual);

interface State {
	screens: ImmutableScreen[];
	latest: ImmutableScreen | null;
}

export default class VizContainer extends React.Component<{}, State> {
	private screens$: Subscription;

	state: State = {
		screens: [],
		latest: null,
	}

	componentWillMount () {
		this.addScreen(getDetails(screen));
		this.screens$ = detect.subscribe(this.addScreen);
	}

	componentWillUnmount () {
		this.screens$.unsubscribe();
	}

	render () {
		return <Viz screens={this.state.screens} latest={this.state.latest} />;
	}

	private addScreen = (screen: ImmutableScreen) => {
		this.setState((state) => ({
			screens: uniqueScreens([...state.screens, screen]),
			latest: screen,
		}));
	};
}
