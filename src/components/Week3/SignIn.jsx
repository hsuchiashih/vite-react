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
  <div className="form-group">
    <label htmlFor="signInEmail">Email</label>
    <input
      type="email"
      className="form-control"
      id="signInEmail"
      aria-describedby="emailHelp"
      placeholder="請輸入電子信箱"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="signInPassword">Password</label>
    <input
      type="password"
      className="form-control"
      id="signInPassword"
      aria-describedby="passwordHelp"
      placeholder="請輸入密碼"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button className="btn btn-primary formControls_btnSubmit mt-3" onClick={signIn}>登入</button>
  <p>{message}</p>
</div>
  )
}

export default SignIn