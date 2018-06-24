import { connect } from 'react-redux';
import { ReducerState, getScreens, getLatestScreen } from '../store';
import ScreenDetailsList from '../components/ScreenDetailsList';

const mapStateToProps = (state: ReducerState) => ({
	screens: getScreens(state),
	latest: getLatestScreen(state),
});

export default connect(
	mapStateToProps,
)(ScreenDetailsList);
