import {createStore, combineReducers} from 'redux'
import teamsReducer from './teamsReducer'
import playsReducer from './playsReducer'



let reducers = combineReducers({
    teams: teamsReducer,
    plays: playsReducer,
})

let store  = createStore(reducers)


export default store;