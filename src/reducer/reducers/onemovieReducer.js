const INITIAL_STATE = {
    movie: {}
}

export const GET_ONEMOVIE = 'GET_ONEMOVIE'
export const GET_ONEMOVIE_REQUEST = 'GET_ONEMOVIE_REQUEST'

export const getOnemovie = (movie) => {
    return {
        type: GET_ONEMOVIE,
        payload: {
            movie
        }
    }
}

export const getOnemovieRequest = (id) => {
    return {
        type: GET_ONEMOVIE_REQUEST,
        id
    }
}

export const onemovieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ONEMOVIE:
            return {
                ...state,
                movie: {...(action.payload.movie)}
            }
        default:
            return state
    }
}