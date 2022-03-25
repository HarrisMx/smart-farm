import { USER_LOGED_IN, UPDATE_FARMING_TIPS } from "./userActionsTypes";

const initialState = {
    userLogedIn: false,
    farmingTips: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGED_IN: 
            return { ...state, userLogedIn: action.payload };
        case UPDATE_FARMING_TIPS:
            return { ...state, farmingTips: action.payload };
        default:
            return state;
    }
}

export default appReducer;