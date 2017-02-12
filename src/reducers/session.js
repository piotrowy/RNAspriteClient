/**
 * Created by piotrowy on 12.02.2017.
 */
const defaultState = {
  key: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SUCCESS_SUBMIT':
      return (Object.assign({}, state, {key: action.result}));
    default:
      return state;
  }
}