import * as React from 'react';
import { ImmutableScreen } from './screen';

export interface Props {
	screens: ImmutableScreen[];
}

export class Viz extends React.Component<Props> {
	private canvas: HTMLCanvasElement;

	render () {
		return (
			<canvas ref={(el) => this.canvas = el as HTMLCanvasElement} />
		);
	}
}
