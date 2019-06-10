const INITIAL_STATE = {
    movies: []
}

export const GET_MOVIE = 'GET_MOVIE'
export const GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST'

export const getMovie = (movies) => {
    return {
        type: GET_MOVIE,
        payload: {
            movies
        }
    }
}

export const getMovieRequest = () => {
    return {
        type: GET_MOVIE_REQUEST
    }
}

export const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                movies: [...(action.payload.movies)]
            }
        default:
            return state
    }
}
