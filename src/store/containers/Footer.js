import { connect } from 'react-redux';
import { saveTheme } from '../actions/changeThemeAction';
import TodoFooter from '../../component/Layout/TodoFooter';

const mapDispatchToProps = dispatch => ({
    dispatch,
    saveColorTheme: color => dispatch(saveTheme(color)),
});
function mapStateToProps(state) {
    return {
        themeColor: state.color
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFooter);
