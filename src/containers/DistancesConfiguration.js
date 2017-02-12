import {connect} from 'react-redux';
import Configuration from './../components/DistancesConfiguration';

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
    fetchAtoms: (id, model, chain) => {
      fetch(`/structure/atoms/${id}/${model}/${chain}`)
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: 'ATOMS',
            atoms: result
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
      fetch(`/matrix/distances/${id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body:spec})
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