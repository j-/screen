import { uniqWith } from 'ramda';

declare global {
	interface Screen {
		readonly availHeight: number;
		readonly availLeft: number;
		readonly availTop: number;
		readonly availWidth: number;
		readonly colorDepth: number;
		readonly height: number;
		readonly orientation: {
			readonly angle: number;
			readonly onchange: () => void;
			readonly type: string;
		};
		readonly pixelDepth: number;
		readonly width: number;
	}
}

export interface ImmutableScreen {
	readonly availHeight: number;
	readonly availLeft: number;
	readonly availTop: number;
	readonly availWidth: number;
	readonly colorDepth: number;
	readonly height: number;
	readonly orientationAngle: number;
	readonly orientationType: string;
	readonly pixelDepth: number;
	readonly width: number;
}

export const getDetails = (screen: Screen): ImmutableScreen => ({
	availHeight: screen.availHeight,
	availLeft: screen.availLeft,
	availTop: screen.availTop,
	availWidth: screen.availWidth,
	colorDepth: screen.colorDepth,
	height: screen.height,
	orientationAngle: screen.orientation.angle,
	orientationType: screen.orientation.type,
	pixelDepth: screen.pixelDepth,
	width: screen.width,
});

export const isEqual = (left: ImmutableScreen, right: ImmutableScreen) => (
	left.availHeight === right.availHeight &&
	left.availLeft === right.availLeft &&
	left.availTop === right.availTop &&
	left.availWidth === right.availWidth &&
	left.colorDepth === right.colorDepth &&
	left.height === right.height &&
	left.orientationAngle === right.orientationAngle &&
	left.orientationType === right.orientationType &&
	left.pixelDepth === right.pixelDepth &&
	left.width === right.width
);

export const uniqueScreens = uniqWith(isEqual);
