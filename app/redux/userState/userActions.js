import {USER_LOGED_IN, UPDATE_FARMING_TIPS} from './userActionsTypes';

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