import { Store } from 'redux';
import { detect } from './detect';
import { ImmutableScreen } from './screen';
import { detectScreen } from './store/actions';

export default (store: Store) => {
	const screens$ = detect.subscribe((screen: ImmutableScreen) => {
		store.dispatch(
			detectScreen(screen)
		);
	});
	return () => screens$.unsubscribe();
};
