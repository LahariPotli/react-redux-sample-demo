import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import IceCreamReducer from './IceCream/IceCreamReducer';

const rootReducer = combineReducers ({
    cake:cakeReducer,
    icecream:IceCreamReducer
})

export default rootReducer;