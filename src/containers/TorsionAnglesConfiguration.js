import {connect} from 'react-redux';
import Configuration from './../components/TorsionAnglesConfiguration';

export default connect(
  state => state,
  dispatch => ({
    fetchModels: (id) => {
      fetch(`/structure/models/${id}`)
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'MODELS',
            models: result
          })
        })
        .catch(err => {
          dispatch({
            type: 'SERVER_FAULT',
            error: err
          })
        })
    },
    fetchChains: (id, model) => {
      fetch(`/structure/chains/${id}/${model}`)
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'CHAINS',
            chains: result
          })
        })
        .catch(err => {
          dispatch({
            type: 'SERVER_FAULT',
            error: err
          })
        })
    },
    fetchMatrix: (id, spec) => {
      fetch(`/matrix/torsion-angles/${id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body:spec})
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'MATRIX_VIEW',
            matrix: result
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
)(Configuration);