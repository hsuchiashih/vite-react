import SignUp from "./components/Week3/SignUp";
import SignIn from "./components/Week3/SignIn";
import CheckOut from "./components/Week3/CheckOut";
import SignOut from "./components/Week3/SignOut";
import TodoList from "./components/Week3/TodoList";

function Week3() {
  const todoToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexschoolTodo='))
    ?.split('=')[1];

  return(<>
    <SignUp/>
    <SignIn/>
    <CheckOut/>
    <SignOut/>
    <hr/>
    <TodoList todoToken={todoToken}/>
  </>
  )
}

export default Week3