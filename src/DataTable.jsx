import { useState } from "react";

const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
    edit: false
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18,
    edit: false
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34,
    edit: false
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
    edit: false
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
    edit: false
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
    edit: false
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
    edit: false
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
    edit: false
  },
];
function DataTable() {
  const [list, setList] = useState(data);

  return <table>
    <thead>
      <tr>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col">價格</th>
        <th scope="col">庫存</th>
      </tr>
    </thead>
    <tbody>
      {list.map((item) => {
        return (<tr key={item.id}>
          {!item.toggle &&
            <td onClick={() => {
              const newList = list.map((newItem) => {
                if (newItem.id === item.id) {
                  item.toggle = !item.toggle
                }

                return newItem
              })
              setList(newList);
            }}>
              {item.name}
            </td>
          }
          {item.toggle &&
            <td>
              <input type="text" value={item.name} onChange={(e) => {
                const newList = list.map((newItem) => {
                  if (newItem.id === item.id) {
                    item.name = e.target.value
                  }

                  return newItem
                })
                setList(newList);
              }} />

              <button onClick={() => {
                const newList = list.map((newItem) => {
                  if (newItem.id === item.id) {
                    item.toggle = !item.toggle
                  }

                  return newItem
                })
                setList(newList);
              }}
              >編輯名稱</button></td>

          }

          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => {
              const newList = list.map((newItem) => {
                if (newItem.id === item.id) {
                  item.stock = item.stock - 1
                }

                return newItem
              })

              setList(newList);
            }}
            >-</button>
            {item.stock}
            <button onClick={() => {
              const newList = list.map((newItem) => {
                if (newItem.id === item.id) {
                  item.stock = item.stock + 1
                }

                return newItem
              })

              setList(newList);
            }}

            >+</button></td>
        </tr>
        )
      })
      }
    </tbody>
  </table>
}

export default DataTable;