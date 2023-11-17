import {USER_LOGED_IN, UPDATE_FARMING_TIPS, UPDATE_ACTIVE_TIPS, UPDATE_TEMPERATURE, UPDATE_DATE} from './userActionsTypes';

export const setUserLoggedIn = loginStatus => dispatch => {
    return dispatch({
        type: USER_LOGED_IN,
        payload: loginStatus
    })
}

export const updateFarmingTips = farmingTips => dispatch => {
    return dispatch({
        type: UPDATE_FARMING_TIPS,
        payload: farmingTips
    })
}

export const updateActiveFarmingTips = activeFarmingTips => dispatch => {
    return dispatch({ 
        type: UPDATE_ACTIVE_TIPS,
        payload: activeFarmingTips
    })
}

export const updateTemperature = temperature => dispatch => {
    return dispatch({ 
        type: UPDATE_TEMPERATURE,
        payload: temperature
    })
}

export const updateDate = date => dispatch => {
    return dispatch({ 
        type: UPDATE_DATE,
        payload: date
    })
}

export const updateStreamingUri = streamingUri => dispatch => {
    return dispatch({ 
        type: UPDATE_STREAMING_URI,
        payload: streamingUri
    })
}