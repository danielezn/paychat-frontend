import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// tslint:disable-next-line:no-string-literal
export default createStoreWithMiddleware(rootReducer, window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__()']);