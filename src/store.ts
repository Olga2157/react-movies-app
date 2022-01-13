import { combineReducers, createStore } from "redux"
import MovieReducer from "./redux/reducers/MovieReducer"

const rootReducer = combineReducers({
  movieReducer: MovieReducer
})

const store = createStore(
  rootReducer
)

export default store
export type RootState = ReturnType<typeof store.getState>
