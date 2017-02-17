import {connect} from 'react-redux';
import MatrixView from './../components/MatrixView';

export default connect(
  state => state,
  dispatch => ({
    download: (id) => {
      fetch(`/matrix/csv/${id}`)
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'MATRIX_VIEW',
          })
        })
        .catch(err => {
          dispatch({
            type: 'SERVER_FAULT',
            error: err
          })
        })
    },
    sendEmail: (id, email) => {
      fetch(`/email/send/${id}/${email}`)
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'MATRIX_VIEW',
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
)(MatrixView);