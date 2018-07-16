import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const PRODUCTION = 'production'

// tslint:disable-next-line:no-string-literal
const ENVIRONMENT = window["env"];

const logger = ENVIRONMENT === PRODUCTION
              ? (stores:any) => (next:any) => (action:any) => {
                // tslint:disable-next-line:no-console
                console.log('dispatching', action);
                const result = next(action);
                // tslint:disable-next-line:no-console
                console.log('next state', store.getState());
                return result
              }
              // tslint:disable-next-line:no-empty
              : (stores:any) => (next:any) => (action:any) => {}

// tslint:disable-next-line:no-empty
const extension = (stores:any) => (next:any) => (action:any) => {}

export let store = createStore( rootReducer, compose(applyMiddleware(thunk, logger), extension ))