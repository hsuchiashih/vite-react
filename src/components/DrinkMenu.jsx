function DrinkMenu({name , description, price}) {
  return <>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{name}</h5>
        <small>${price}</small>
      </div>
    <p className="mb-1">{description}</p>
  </> 
}

export default DrinkMenu