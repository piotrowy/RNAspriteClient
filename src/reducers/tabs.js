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
    case 'SUCCESS_SUBMIT':
      switch(state.computationalMode) {
        case 'BATCH_MODE':
          return defaultState;
        default:
          return (Object.assign({}, state, {name: 'CONFIGURATION'}));
      }
    case 'SERVER_FAULT':
      return {name: 'ERROR'};
    default:
      return state;
  }
}