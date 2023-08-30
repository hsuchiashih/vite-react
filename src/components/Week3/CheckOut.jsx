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
      <div className="form-group">
        <label htmlFor="checkOutToken">Email</label>
        <input
          type="token"
          className="form-control"
          id="checkOutToken"
          placeholder="請輸入Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
    <button className="btn btn-primary formControls_btnSubmit mt-3" onClick={checkOut}>驗證</button>
    <p>{message}</p>
  </div>
  )
}

export default CheckOut