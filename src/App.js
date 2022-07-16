import React,{useState} from "react";

import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  const [CartShow, SetCartShow] = useState(false);
  const showCartHandler = ()=>{
    SetCartShow(true);
  }
  const HideCartHandler = ()=>{
    SetCartShow(false)
  };
  return (
    <CartProvider>
     {CartShow && <Cart  onClose={HideCartHandler}/>}
      <Header  onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
