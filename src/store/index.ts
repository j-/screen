import { Reducer } from 'redux';
import { ImmutableScreen, isEqual, uniqueScreens } from '../screen';
import { isActionDetectScreen } from './actions';

export interface ReducerState {
	screens: ImmutableScreen[];
	latest: ImmutableScreen | null;
}

export const DEFAULT_STATE: ReducerState = {
	screens: [],
	latest: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionDetectScreen(action)) {
		const { screen } = action.data;
		return {
			...state,
			screens: uniqueScreens([...state.screens, screen]),
			latest: screen,
		};
	}

	return state;
};

export default reducer;

export const getScreens = (state: ReducerState) => (
	state.screens
);

export const getLatestScreen = (state: ReducerState) => (
	state.latest
);

export const screenIsLatest = (state: ReducerState, screen: ImmutableScreen) => (
	screen !== null && isEqual(
		getLatestScreen(state) as ImmutableScreen,
		screen,
	)
);
