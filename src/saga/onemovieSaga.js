import { put, call } from 'redux-saga/effects'
import { getOnemovie} from '../reducer/reducers/onemovieReducer'
import api from '../config/api'

export function * onemovieGet (action) {
    let id = action.id
    const rsp = yield call ([api, 'get'], `disney-plus/movie/${id}`)
    console.log(rsp.data)
    yield put(getOnemovie(rsp.data))
}