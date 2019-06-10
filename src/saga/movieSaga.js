import { put, call } from 'redux-saga/effects'
import { getMovie} from '../reducer/reducers/movieReducer'
import api from '../config/api'

export function * movieGet () {
    const rsp = yield call ([api, 'get'], "disney-plus/movies")
    yield put(getMovie(rsp.data))
}