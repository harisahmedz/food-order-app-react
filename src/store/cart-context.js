import React from 'react';

const CartContext=  React.createContext({
    items:[],
    totalAmount:0,
    additems: (item)=>{},
    removerItem:(id)=>{},
    clearCart: ()=>{},
});

export default CartContext;