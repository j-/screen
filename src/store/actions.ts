import { Action } from 'redux';
import { ImmutableScreen } from '../screen';

export interface ActionDetectScreen extends Action {
	type: 'DetectScreen';
	data: {
		screen: ImmutableScreen;
	};
}

export const isActionDetectScreen = (action: Action): action is ActionDetectScreen => (
	action.type === 'DetectScreen'
);

export const detectScreen = (screen: ImmutableScreen): ActionDetectScreen => ({
	type: 'DetectScreen',
	data: {
		screen,
	},
});
