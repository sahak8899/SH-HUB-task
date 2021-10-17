import * as actionTypes from "../action-types";


const initialState = {
    userList: [],
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SAVE_USER_LIST:
            return {...state, userList: payload};    
        default:
            return state;
    }
}
