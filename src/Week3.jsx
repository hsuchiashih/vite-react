import SignUp from "./components/Week3/SignUp";
import SignIn from "./components/Week3/SignIn";
import CheckOut from "./components/Week3/CheckOut";
import SignOut from "./components/Week3/SignOut";
import TodoList from "./components/Week3/TodoList";
import { useState, useEffect} from "react";
function Week3() {
  const [token, setToken] = useState('');
  const todoToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('todoToken='))
    ?.split('=')[1];
    useEffect(() => {
      if (todoToken) {
        setToken(todoToken);
      }
    }, []);
  return(<div className="bg-yellow">
      <div className="container vhContainer">
        <SignUp/>
        <hr/>
        <SignIn/>
        <hr/>
        <CheckOut/>
        <hr/>
        <SignOut/>
        <hr/>
        {token && <TodoList todoToken={token}/>}
        {!token && <div className="todoList_container">
            登入後才可使用待辦清單
          </div>
        }
      </div>
  </div>
  )
}

export default Week3