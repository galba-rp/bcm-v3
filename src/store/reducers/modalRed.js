import * as actionTypes from "../actions/actionTypes";

const initialState = {
modal:  false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLOSE_MODAL:
        return {
            ...state,
            modal: false,
        }
        case actionTypes.OPEN_MODAL:
        return {
            ...state,
            modal: true
        }
        default:
      return state;
    }
}
    
  export default reducer;