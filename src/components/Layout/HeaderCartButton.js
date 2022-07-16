import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./css/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const[btnAnimation, SetbtnAnimation]=useState(false);
  const CartCtx = useContext(CartContext);
  const numberOfCartItems = CartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${ btnAnimation ? classes.bump:''}`;
  
  const {items} = CartCtx;

  useEffect (()=>{
    if(items.length ===0){
      return
    }
    SetbtnAnimation(true);

    const timer =  setTimeout(()=>{
      SetbtnAnimation(false);
    },300)
    return () =>{
      clearTimeout(timer);
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
