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
  <div className="pt-5">
  <h2>註冊</h2>
    <div className="form-group">
      <label htmlFor="signUpEmail">Email</label>
      <input
        type="email"
        className="form-control"
        id="signUpEmail"
        aria-describedby="emailHelp"
        placeholder="請輸入電子信箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="signUpPassword">Password</label>
      <input
        type="password"
        className="form-control"
        id="signUpPassword"
        aria-describedby="passwordHelp"
        placeholder="請輸入密碼"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="form-group">
    <label htmlFor="nickname">暱稱</label>
    <input
        type="text"
        className="form-control"
        id="nickname"
        aria-describedby="nicknameHelp"
        placeholder="請輸入暱稱"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
    </div>
    <button className="btn formControls_btnSubmit mt-3" onClick={signUp}>註冊</button>
    <p>{message}</p>

</div>
  )
}

export default SignUp