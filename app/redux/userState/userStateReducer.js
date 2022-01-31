import { USER_LOGED_IN, USER_LOGOUT } from "./userActionsTypes";

const initialState = {
    userLogedIn: false,
}

const userLogedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGED_IN: return {
            ...state,
            userLogedIn: action.userLogedIn
        }
        default:
            return state;
    }
}

export default userLogedInReducer;