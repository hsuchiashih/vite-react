import { useState } from "react"
import axios from 'axios';

function SignUp() {
  const site = 'https://todolist-api.hexschool.io';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');


const signUp = async () => {
  const params = {email, password, nickname}
  try {
    const response = await axios.post(`${site}/users/sign_up`, params);
    console.log(response);
    setMessage(`註冊成功${response.data.uid}`);
  } catch (error) {
    console.log(error);
    setMessage(`註冊失敗${error.response.data.message}`);
  }
}

return(
  <div>
  <h2>註冊</h2>
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
  <input
    value={nickname}
    onChange={(e) => setNickname(e.target.value)}
    placeholder='Nickname'
    type='text'
  />
  <button onClick={signUp}>Sign Up</button>
  <p>{message}</p>
</div>
  )
}

export default SignUp