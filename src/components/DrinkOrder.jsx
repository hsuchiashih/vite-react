function DrinkOrder({name, quantity, subtotal}) {
  return(
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{subtotal}</td>
    </tr>
  )
}

export default DrinkOrder