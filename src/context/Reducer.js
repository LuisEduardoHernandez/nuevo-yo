import { types } from "../types/types";

export const Reducer = (state = {}, action ) => {

    switch ( action.type ) {

        case types.login:
            return {login: action.payload}

        default:
            return state;
    }

}