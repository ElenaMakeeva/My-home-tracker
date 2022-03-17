import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import  saga from 'redux-saga';
import { all } from '@redux-saga/core/effects';
import {InitialState} from "../initState";
// import {locationReducer} from './locationReducer'
import {userReducer} from '../reducers/userReducer'
import { servicesReducer } from './servicesReducer';
import { baraholkaReducer } from "./baraholkaReducer";
import { watcherBaraholka, watcherProducts, watcherDelProductBaraholka} from "../saga/baraholka";
import { watcherAddServiceSaga,  watcherDelServiceSaga,  watcherGetFindServiceSaga,  watcherServicesSaga } from '../saga/benefitServices';
// import { authUserReducer } from '../actionCreators/userAC';


 import {globalNewsReducer} from './globalNewsReducer'
 import { watcherGlobalNews ,watcherAllGlobalNews, watcherAddLike,watcherDelGlobalNews} from '../saga/globalNews';
import { watcherLocalNews,watcherAllLocalNews,watcherAddLocalLike,watcherDelLocalNews } from '../saga/localNews';
import {locationReducer} from './locationReducer'
import { firebaseReducer } from './firebaseReducer';
import {authReducer} from './userReducer'
import { watcherSignUp } from '../saga/userSignup';
import { watcherGetLocation } from '../saga/locations';
import { watcherSignOut } from '../saga/userSignout';
import { watcherSignIn } from '../saga/userSignin';
import { watcherCheckIsAuth } from '../saga/userIsAuth';
import { localNewsReducer } from './localReducer';

const sagaMiddleware = saga();

const rootReducer = combineReducers({
  services: servicesReducer,
  globalNews:globalNewsReducer,
  localReducer:localNewsReducer,
  auth: authReducer,
  location: locationReducer,
  firebase: firebaseReducer,
  baraholka: baraholkaReducer,
})

const composeEnhancer =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk, sagaMiddleware));

export const store = createStore(rootReducer,InitialState, composeEnhancer)

sagaMiddleware.run(
  function*() {
    yield all([watcherServicesSaga(),watcherAddServiceSaga(),watcherDelServiceSaga(),watcherSignUp(), watcherGetLocation(), watcherSignOut(), watcherSignIn(), watcherCheckIsAuth(),watcherAllGlobalNews(),watcherGlobalNews(),watcherAddLike(),watcherBaraholka(), watcherProducts(), watcherDelProductBaraholka(),watcherDelGlobalNews(),watcherLocalNews(),watcherAllLocalNews(),watcherAddLocalLike(),watcherDelLocalNews()]) 

  }
)
