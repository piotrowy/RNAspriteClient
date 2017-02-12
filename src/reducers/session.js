/**
 * Created by piotrowy on 12.02.2017.
 */
const defaultState = {
  key: '',
  models: [],
  chains: [],
  atoms: [],
  matrix: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SUCCESS_SUBMIT':
      return (Object.assign({}, state, {key: action.result}));
    case 'MODELS':
      return (Object.assign({}, state, {models: action.models}));
    case 'CHAINS':
      return (Object.assign({}, state, {chains: action.chains}));
    case 'ATOMS':
      return (Object.assign({}, state, {atoms: action.atoms}));
    case 'ANGLES':
      return (Object.assign({}, state, {angles: action.angles}));
    case 'MATRIX_VIEW':
      return (Object.assign({}, state, {matrix: action.matrix}));
    case 'SERVER_FAULT':
      return {key: ''};
    default:
      return state;
  }
}