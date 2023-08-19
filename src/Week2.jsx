import { useState } from "react";
import DrinkMenu from "./components/DrinkMenu";
import DrinkCart from "./components/DrinkCart";
import DrinkOrder from "./components/DrinkOrder";

const drinkMenuData = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
];




function Week2() {
  const [drinkMenu] = useState(drinkMenuData);
  const [cart, setCart] = useState([])
  const [order, setOrder]= useState({})
  function addToCartError(drink) {
    cart.push({
      ...drink,
      id: new Date().getTime(),
      quantity: 1,
      subtotal: drink.price,
      })
      console.log(cart);
    setCart(cart);
  }
  const addToCart2 = (drink) => {
    setCart([...cart, {
      ...drink,
      id: new Date().getTime(),
      quantity: 1,
      subtotal: drink.price,
    }])
  }
  const updateCart = (id, value) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subtotal: cartItem.price * parseInt(value)
        }
      }
      return cartItem
    })
    setCart(newCart)
  }

  const createOrder = () => {
    setOrder({
      id: new Date().getTime(),
      cart
    })

    setCart([])
  }
  return <div id="root">
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="list-group">
              {drinkMenu.map((item) => {
                return<a href="#" className="list-group-item list-group-item-action" key={item.id} 
                  onClick={((e) => {
                    e.preventDefault();
                    addToCart2(item)

                  })}>
                   <DrinkMenu
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                </a>
              })}
 
          </div>
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" width="50">操作</th>
                <th scope="col">品項</th>
                <th scope="col">描述</th>
                <th scope="col" width="90">數量</th>
                <th scope="col">單價</th>
                <th scope="col">小計</th>
              </tr>
            </thead>
            <tbody>
            {cart.map((item) => {
            return (
              <DrinkCart key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                description={item.description}
                price={item.price}
                subtotal={item.subtotal}
                updateCart={updateCart}
              />
            )})}
            </tbody>
          </table>
          <div className="text-end mb-3">
            <h5>總計: <span>$100</span></h5>
          </div>
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="備註"
          ></textarea>
          <div className="text-end">
            <button className="btn btn-primary" onClick={((e)=>{
              e.preventDefault()
              createOrder()
            })}>送出</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-8">
        {
          !order.id ? <div className="alert alert-secondary text-center" role="alert">
            尚未建立訂單
          </div> :
          (<div className="card">
            <div className="card-body">
              <div className="card-title">
                <h5>訂單</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">品項</th>
                      <th scope="col">數量</th>
                      <th scope="col">小計</th>
                    </tr>
                  </thead>
                  <tbody>
   
                    {order.cart.map((item) => {
                      return (
                      <DrinkOrder key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        subtotal={item.subtotal}
                      />
                    )})}
                  </tbody>
                </table>
                <div className="text-end">備註: <span>都不要香菜</span></div>
                <div className="text-end">
                  <h5>總計: <span>$145</span></h5>
                </div>
              </div>
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  </div>
}

export default Week2