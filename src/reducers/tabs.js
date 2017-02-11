export default (state = {name: "HOME", inputMode: 'PDB_ID'}, action) => {
  switch (action.type) {
    case 'SWITCH_TAB':
      return {name: action.tab, inputMode: state.inputMode};
    case 'SET_INPUT_MODE':
      return {name: state.name, inputMode: action.inputMode};
    default:
      return state;
  }
}