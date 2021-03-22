import { BUY_ICECREAM } from './IcecreamType'; 

const initialState = {
    numOfIceCreams:30
}

const IceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

    export default IceCreamReducer;
