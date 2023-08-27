import { useState } from "react"
import axios from 'axios';

function CheckOut() {
  const site = 'https://todolist-api.hexschool.io';
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');


const checkOut = async() => {
  try {
    const params = {
      headers: {
        Authorization: token,
      },
    }
    const response = await axios.get(`${site}/users/checkout`, params);
    console.log(response);
    setMessage(`驗證成功${response.data.nickname}`);
  } catch (error) {
    console.log(error);
    setMessage(`驗證失敗${error.response.data.message}`);
  }
}

return(
  <div>
    <h2>驗證</h2>
    <input
      value={token}
      onChange={(e) => setToken(e.target.value)}
      placeholder='Token'
    />
    <button onClick={checkOut}>checkOut</button>
    <p>{message}</p>
  </div>
  )
}

export default CheckOut