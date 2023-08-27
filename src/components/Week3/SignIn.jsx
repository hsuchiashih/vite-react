import { useState } from "react"
import axios from 'axios';

function SignIn() {
  const site = 'https://todolist-api.hexschool.io';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


const signIn = async () => {
  const params = {email, password}
  try {
    const response = await axios.post(`${site}/users/sign_in`, params);
    const token = response.data.token
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie = `todoToken=${token}; expires=${tomorrow.toUTCString()}`;
    console.log(
      document.cookie
        .split('; ')
        .find((row) => row.startsWith('todoToken')),
    );
    // console.log(response);
    setMessage(`登入成功${response.data.nickname}`);
  } catch (error) {
    console.log(error);
    setMessage(`登入失敗${error.response.data.message}`);
  }
}

return(
  <div>
  <h2>登入</h2>
  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder='Email'
  />
  <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder='Password'
    type='password'
  />
  <button onClick={signIn}>Sign In</button>
  <p>{message}</p>
</div>
  )
}

export default SignIn