import {SET_LOADING, GET_PRODUCTS} from './Action'
const initailProducts = {
    loading: false,
    products: []
}

export default function ProductReducer(state = initailProducts, action){

    if(action.type === SET_LOADING){
        return {...state, loading: true}
    }
    if(action.type === GET_PRODUCTS){
        return {...state, loading: false, products: action.payload}
    }

    return state;
}
