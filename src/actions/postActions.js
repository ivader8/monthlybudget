import {POST_EMAIL} from './types';

export const createEmail = (input) =>  dispatch => {

    dispatch ({
        type: POST_EMAIL,
        payload: input
    })

}


