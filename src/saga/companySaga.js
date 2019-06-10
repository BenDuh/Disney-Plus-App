import { put, call } from 'redux-saga/effects'
import { getCompany} from '../reducer/reducers/companyReducer'
import api from '../config/api'

export function * companyGet (action) {
    let id = action.id
    const rsp = yield call ([api, 'get'], `disney-plus/company/${id}`)
    console.log(rsp.data)
    yield put(getCompany(rsp.data))
}