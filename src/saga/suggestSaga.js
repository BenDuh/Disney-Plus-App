import { put, call } from 'redux-saga/effects'
import { getSuggest} from '../reducer/reducers/suggestReducer'
import api from '../config/api'

export function * suggestGet () {
    const rsp = yield call ([api, 'get'], "disney-plus/suggest")
    yield put(getSuggest(rsp.data))
}