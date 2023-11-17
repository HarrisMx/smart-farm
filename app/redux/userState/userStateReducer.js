import { USER_LOGED_IN, 
    UPDATE_FARMING_TIPS, 
    UPDATE_ACTIVE_TIPS, 
    UPDATE_TEMPERATURE, 
    UPDATE_DATE,
    UPDATE_STREAMING_URI} from "./userActionsTypes";

const initialState = {
    userLogedIn: false,
    farmingTips: [],
    activeFarmingTips: 0,
    temperature: {},
    date: null,
    streamingURI: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGED_IN: 
            return { ...state, userLogedIn: action.payload };
        case UPDATE_FARMING_TIPS:
            return { ...state, farmingTips: action.payload };
        case UPDATE_ACTIVE_TIPS:
            return { ...state, activeFarmingTips: action.payload };
        case UPDATE_TEMPERATURE:
            return { ...state, temperature: action.payload };
        case UPDATE_DATE:
            return { ...state, date: action.payload };
        case UPDATE_STREAMING_URI:
            return { ...state, streamingURI: action.payload };
        default:
            return state;
    }
}

export default appReducer;