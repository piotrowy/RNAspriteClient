import { connect } from 'react-redux';
import InputMode from './../components/InputMode';

export default connect(
  state => state.tabs,
  dispatch => ({
    setInputMode: (inputMode, tab) => {
      dispatch({type:'SET_INPUT_MODE', inputMode: inputMode});
      dispatch({type:'SWITCH_TAB', name: tab});
    }
  })
)(InputMode);
