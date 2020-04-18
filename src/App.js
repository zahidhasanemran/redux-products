import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import{Provider} from 'react-redux';
import CountReducer from "./Redux/CountReducer";
import ProductReducer from "./Redux/ProductReducer";
import ModalReducer from "./Redux/ModalReducer";
import Modal from "./Modal";
import thunk from 'redux-thunk';
import Product from "./Product";


const middleware = [thunk];

// initial store 


// store for counter
const store = createStore(
  combineReducers({
    countState: CountReducer,
    modalState: ModalReducer,
    productState: ProductReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))

  );




const App = () => {
  return (
    <Provider store={store}>
        <Counter random="random string" />;
        <Modal></Modal>
        <Product></Product>
    </Provider>
  )
};

export default App;
