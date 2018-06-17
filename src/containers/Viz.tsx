import { connect } from 'react-redux';
import { ReducerState, getScreens, getLatestScreen } from '../store';
import Viz from '../components/Viz';

const mapStateToProps = (state: ReducerState) => ({
	screens: getScreens(state),
	latest: getLatestScreen(state),
});

export default connect(
	mapStateToProps,
)(Viz);
