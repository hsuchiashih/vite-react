import { useState } from "react"
import axios from 'axios';

function SignOut() {
  const site = 'https://todolist-api.hexschool.io';
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');


const signOut = async () => {
  const params = {
    headers: {
      Authorization: token,
    },
  }
  try {
    const response = await axios.post(`${site}/users/sign_out`, {} , params);
    console.log(response);
    setMessage(`登出成功${response.data.nickname}`);
  } catch (error) {
    console.log(error);
    setMessage(`登出失敗${error.response.data.message}`);
  }
}

return(
  <div>
    <h2>登出</h2>
    <div className="form-group">
      <label htmlFor="signOutToken">Token</label>
      <input
        type="text"
        className="form-control"
        id="signOutToken"
        placeholder="請輸入Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
    </div>
    <button className="btn formControls_btnSubmit mt-3" onClick={signOut}>登出</button>
    <p>{message}</p>
  </div>
  )
}

export default SignOut