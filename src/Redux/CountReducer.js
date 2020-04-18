
// reducer 

import {RESET, INCREASE, DECREASE} from "./Action" ;

const initalStore = {
  count: 29,
  name: "Abdullah"
}

export default function CountReducer(state = initalStore, countAction){
  

    switch (countAction.type) {
      case DECREASE:
        return {...state, count: state.count - 1};
  
      case INCREASE:
        return {...state, count: state.count + 1};
    
      case RESET:
        return {...state, count: 0};
    
      default: 
        return state;
    }
  
    
  };