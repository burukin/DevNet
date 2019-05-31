/**
 * Created by agros on 24.05.2019.
 */
import * as actionTypes from './actionTypes';
import uuid from 'uuid';

export const setAlert = (msg, alertType, timeout=5000) => dispatch => {
    const id = uuid.v4();
    dispatch ({
        type: actionTypes.SET_ALERT,
        payload: {
            msg,
            alertType,
            id
        }
    });

    setTimeout(()=> dispatch({
        type: actionTypes.REMOVE_ALERT,
        payload: id
    }), timeout);
};