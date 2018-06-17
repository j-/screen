import * as React from 'react';
import { ImmutableScreen, isEqual } from '../screen';

export interface Props {
	screens: ImmutableScreen[];
	latest: ImmutableScreen | null;
}

function getColor (index: number) {
	return `hsl(${200 + index * 120}, 80%, 50%)`;
}

const ACTIVE_OPACITY = 1;
const INACTIVE_OPACITY = 0.8;

export default class Viz extends React.Component<Props> {
	render () {
		return (
			<svg
				className="Viz"
				xmlns="http://www.w3.org/2000/svg"
				viewBox={this.calculateViewBox()}
				width={500}
				height={500}
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
			<rect
				key={i}
				x={screen.availLeft}
				y={screen.availTop}
				width={screen.width}
				height={screen.height}
				fill={getColor(i)}
				opacity={
					latest !== null && isEqual(screen, latest) ?
						ACTIVE_OPACITY :
						INACTIVE_OPACITY
				}
			/>
		));
	}
}
