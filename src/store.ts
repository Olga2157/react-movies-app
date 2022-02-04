import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import MovieReducer from './redux/reducers/MovieReducer';

const rootReducer = combineReducers({
  movieReducer: MovieReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
export type RootState = ReturnType<typeof store.getState>
