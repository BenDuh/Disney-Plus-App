const INITIAL_STATE = {
    suggest: []
}

export const GET_SUGGEST = 'GET_SUGGEST'
export const GET_SUGGEST_REQUEST = 'GET_SUGGEST_REQUEST'

export const getSuggest = (suggest) => {
    return {
        type: GET_SUGGEST,
        payload: {
            suggest
        }
    }
}

export const getSuggestRequest = () => {
    return {
        type: GET_SUGGEST_REQUEST
    }
}

export const suggestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SUGGEST:
            return {
                ...state,
                suggest: [...(action.payload.suggest)]
            }
        default:
            return state
    }
}
