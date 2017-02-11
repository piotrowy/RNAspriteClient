const defaultState = {
  name: "HOME",
  inputMode: 'PDB_ID',
  computationalMode: 'HOME'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_TAB':
      return (Object.assign({}, state, {name: action.name}));
    case 'SET_INPUT_MODE':
      return (Object.assign({}, state, {inputMode: action.inputMode}));
    case 'SET_COMPUTATIONAL_MODE':
      return (Object.assign({}, state, {name: action.name, computationalMode: action.computationalMode}));
    default:
      return state;
  }
}