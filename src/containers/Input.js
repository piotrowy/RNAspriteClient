import {connect} from 'react-redux';
import Input from './../components/Input';

export default connect(
  state => state.tabs,
  dispatch => ({
    sendData: e => {
      fetch(`/session/pdbId/${e}`)
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'SUCCESS_SUBMIT',
            result
          })
        })
        .catch(err => {
          dispatch({
            type: 'SERVER_FAULT',
            error: err
          })
        })
    },
    submitTaskForm: e => {
      fetch(`/session/file`, {method: 'POST', body: e})
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'SUCCESS_SUBMIT',
            result
          })
        })
        .catch(err => {
          dispatch({
            type: 'SERVER_FAULT',
            error: err
          })
        })
    }
  })
)(Input);