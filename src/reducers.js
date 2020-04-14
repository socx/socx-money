import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import welcome from 'containers/Welcome/reducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  welcome
  // rest of your reducers
})
export default createRootReducer
