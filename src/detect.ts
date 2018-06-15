import { of, interval } from 'rxjs';
import { flatMap, distinctUntilChanged } from 'rxjs/operators';
import { getDetails, isEqual } from './screen';

const INTERVAL = 1000 / 10; // 10 times / second

export const detect = interval(INTERVAL).pipe(
	flatMap(() => of(getDetails(screen))),
	distinctUntilChanged(isEqual)
);
