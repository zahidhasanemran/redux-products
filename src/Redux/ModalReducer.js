import {MODAL_OPEN, MODAL_CLOSE} from './Action'
// import { bindActionCreators } from 'redux';
const initailModals = {
    name: "Modal Reducer",
    text: "",
    isOpen: false
}

export default function ModalsReducer(state = initailModals, action){

    if(action.type === MODAL_OPEN){
        return {
            ...state, 
            isOpen: true, 
            name: action.payload.name,
            text: action.payload.text
        }
    }
    if(action.type === MODAL_CLOSE){
        return {
            ...state,
            isOpen: false,
            name: "",
            text: ""
        }
    }

    return state;
}
