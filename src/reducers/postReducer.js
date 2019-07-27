import { POST_EMAIL } from '../actions/types'

const initialState = {
    email: ''
}

export default function (state = initialState, action) {

    //TODO add switch case for action types 
    switch (action.type) {

        case POST_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    }

}


