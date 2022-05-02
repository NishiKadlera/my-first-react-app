import React, { useState } from "react";

function SCart()
{
    let [Qty,setQty]=useState(0);
    let increment=() => 
    {
        setQty(Qty +1);
    }
    let decrement=() => 
    {
        setQty(Qty -1);
    }

    return (
    <div>
        <center>
        <h3>Quantity: {Qty}</h3>
        <button className="btn btn-success" onClick={increment}>+</button> &nbsp;
        <button className="btn btn-danger" onClick={decrement}>-</button>
        
        </center>
    </div>
    )
   
}

export default SCart;