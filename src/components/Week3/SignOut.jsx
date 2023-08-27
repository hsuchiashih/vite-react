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
    <input
      value={token}
      onChange={(e) => setToken(e.target.value)}
      placeholder='Token'
    />
    <button onClick={signOut}>signOut</button>
    <p>{message}</p>
  </div>
  )
}

export default SignOut