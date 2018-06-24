import * as React from 'react';
import { ImmutableScreen, isEqual } from '../screen';
import { getColor } from '../color';

export interface Props {
	screens: ImmutableScreen[];
	latest: ImmutableScreen | null;
}

const ACTIVE_OPACITY = 1;
const INACTIVE_OPACITY = 0.8;

/**
 * The font size of each screen group is a function of the minimum screen
 * dimension in pixels multiplied by this ratio. For example, if this constant
 * is set to 0.1 and the screen size is 1920x1080 then the resulting font size
 * would be 1080px * 0.1 = 108px.
 */
const BASE_FONT_SIZE_SCALE = 0.1;

function calculateBaseFontSize (screen: ImmutableScreen) {
	return BASE_FONT_SIZE_SCALE * Math.min(screen.width, screen.height);
}

export default class Viz extends React.Component<Props> {
	render () {
		return (
			<svg
				className="Viz"
				xmlns="http://www.w3.org/2000/svg"
				viewBox={this.calculateViewBox()}
				width="50em"
				height="30em"
			>
				{this.getScreenRects()}
			</svg>
		);
	}

	private calculateViewBox () {
		let x1 = 0, x2 = 0, y1 = 0, y2 = 0;

		for (const screen of this.props.screens) {
			x1 = Math.min(x1, screen.availLeft);
			y1 = Math.min(y1, screen.availTop);
			x2 = Math.max(x2, screen.availLeft + screen.width);
			y2 = Math.max(y2, screen.availTop + screen.height);
		}

		return `${x1} ${y1} ${x2 - x1} ${y2 - y1}`;
	}

	private getScreenRects () {
		const { screens, latest } = this.props;
		return screens.map((screen, i) => (
			<g
				key={i}
				className="Viz-screen"
				x={screen.availLeft}
				y={screen.availTop}
				style={{ fontSize: calculateBaseFontSize(screen) }}
			>
				<rect
					className="Viz-screen-rect"
					width={screen.width}
					height={screen.height}
					fill={getColor(i)}
					opacity={
						latest !== null && isEqual(screen, latest) ?
							ACTIVE_OPACITY :
							INACTIVE_OPACITY
					}
				/>
				<text
					className="Viz-screen-coords"
					x="0.25em"
					y="1.25em"
				>
					{screen.availLeft},{screen.availTop}
				</text>
			</g>
		));
	}
}
