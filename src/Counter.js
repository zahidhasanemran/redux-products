import React from "react";
import {connect} from 'react-redux';
// import {RESET, INCREASE, DECREASE, MODAL_OPEN} from "./Redux/Action" ;
import {reset, increase, decrease, modalOpen} from "./Redux/Action" ;

function Counter({name, count, increase, decrease, reset, modalOpen}) {
  
  
  return <div className="container">
    <h1>Counter</h1>
    <h3> {name} </h3>
    <p className="counter">{count}</p>

    <div className="buttons">
      <button type="button" className="btn" onClick={increase}>Increase</button>
      <button type="button" className="btn" onClick={() => {
        reset();
        modalOpen("Modal after Reset","Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat dignissimos reiciendis soluta! Assumenda ad, vitae omnis est dolorem aperiam")
      }}>Reset</button>
      <button type="button" className="btn" onClick={decrease}>Decrease</button>
    </div>
  </div>;
}

// by this function we can get whatever we need from redux store and set to this components as props
// this mapState function will only run after every new state return and will render in browser 
function mapState({countState: {count, name}}) {
  // console.log(state)
  return {
    count: count,
    name: name
  }
  
}

const mapDispatch = {
  increase,
  decrease,
  reset,
  modalOpen
}

// function mapDispatch(dispatch, ownProps){
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch(reset());
//       dispatch(modalOpen(
//         "Modal after Reset",
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat dignissimos reiciendis soluta! Assumenda ad, vitae omnis est dolorem aperiam"
//       ))
//     }
//   }
// }

export default connect(mapState, mapDispatch)(Counter);

