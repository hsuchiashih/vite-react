import { useState } from "react";
function DrinkCart({ id, name, description, quantity, price, subtotal, updateCart }) {  
  return (<tr>
    <td><button type="button" className="btn btn-sm">x</button></td>
    <td>{name}</td>    
    <td><small>{description}</small></td>
    <td>
      <select className="form-select" value={quantity} onChange={(e) => {
          const value = e.target.value;
          updateCart(id,value)}}>
        {[...Array(10).keys()].map((item) => {
              return (<option value={item + 1} key={item}>{item + 1}</option>)
        })}
      </select>
    </td>
    <td>{price}</td>
    <td>{subtotal}</td>
  </tr >
  )
}

export default DrinkCart