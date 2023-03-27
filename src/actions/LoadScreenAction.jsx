import { 
    SHOW_LOAD_SCREEN,
    HIDE_LOAD_SCREEN
} from "../types/LoadScreenTypes";

export const actionShowLoadScreen = () => {
    return async dispatch => {
        dispatch({
            type: SHOW_LOAD_SCREEN,
        }) 
    }
}

export const actionHideLoadScreen = () => {
    return async dispatch => {
        dispatch({
            type: HIDE_LOAD_SCREEN,
        }) 
    }
}