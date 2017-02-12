import { connect } from 'react-redux';
import Input from './../components/Input';

export default connect(
  state => state.tabs,
  dispatch => ({
    sendData: e => {
      fetch(`http://localhost:8080/session/pdbId/${e}`).then(res => res.json()).then(result => {
        dispatch({
          type: 'SUCCESS_SUBMIT',
          result
        })
      })
    }
  })
)(Input);