// import { applyMiddleware, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const PRODUCTION = 'production'

// // tslint:disable-next-line:no-string-literal
// const ENVIRONMENT = 'production';

// const logger = ENVIRONMENT === PRODUCTION
//               ? (store:any) => (next:any) => (action:any) => {
//                 // tslint:disable-next-line:no-console
//                 console.log('dispatching', action);
//                 const result = next(action);
//                 // tslint:disable-next-line:no-console
//                 console.log('next state', store.getState());
//                 return result
//               }
//               // tslint:disable-next-line:no-empty
//               : (store:any) => (next:any) => (action:any) => {}

// // tslint:disable-next-line:no-empty
// const extension = (store:any) => (next:any) => (action:any) => {}
// export default createStore( rootReducer, compose(applyMiddleware(thunk, logger), extension))

import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

// let finalCreateStore = compose(
// 	applyMiddleware(
// 		createLogger()
// 	)
// )(createStore);

// export default function configureStore(initialState = {}) {
// 	return finalCreateStore(reducer, initialState);
// }

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// tslint:disable-next-line:no-string-literal
export default createStoreWithMiddleware(rootReducer, window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__()']);