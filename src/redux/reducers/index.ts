// Third parties import
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// Local imports
// import { layout } from '../../scenes/layout/reducers';
import { authentication as auth} from '../../scenes/authentication/reducers';
// import { talk } from '../../scenes/talk/reducers';
// import { dashboard } from '../../scenes/dashboard/reducers';

// let reducer = (state = {}, action) => {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// };

const rootReducer = combineReducers({
  auth,
  form
});

export default rootReducer;