import { combineReducers } from 'redux'
import myCreateStore from './createStore'
import { movieReducer} from './reducers/movieReducer'
import { suggestReducer} from './reducers/suggestReducer'
import { onemovieReducer} from './reducers/onemovieReducer'
import { companyReducer} from './reducers/companyReducer'
import rootSaga from '../saga'


export const rootReducer = combineReducers({
    movieReducer,
    suggestReducer,
    onemovieReducer,
    companyReducer
  })
  
  export default myCreateStore(rootReducer, rootSaga)