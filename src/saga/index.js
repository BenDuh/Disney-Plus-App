import { all, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_MOVIE_REQUEST } from '../reducer/reducers/movieReducer';
import { movieGet } from './movieSaga';
import { GET_SUGGEST_REQUEST } from '../reducer/reducers/suggestReducer';
import { suggestGet } from './suggestSaga';
import { GET_ONEMOVIE_REQUEST } from '../reducer/reducers/onemovieReducer';
import { onemovieGet } from './onemovieSaga';
import { GET_COMPANY_REQUEST } from '../reducer/reducers/companyReducer';
import { companyGet } from './companySaga';



export default function * rootSaga () {
    yield all([
        takeLatest(GET_MOVIE_REQUEST, movieGet),
        takeLatest(GET_SUGGEST_REQUEST, suggestGet),
        takeLatest(GET_ONEMOVIE_REQUEST, onemovieGet),
        takeLatest(GET_COMPANY_REQUEST, companyGet),
    ])
  }