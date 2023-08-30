import { useState, useEffect} from "react";
import axios from 'axios';

function TodoList({todoToken}) {
  const site = 'https://todolist-api.hexschool.io';
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [todoEdit, setTodoEdit] = useState({});

  useEffect(() => {
   getTodos();
  }, []);
  const getTodos = async() => {
    try {
      const config = {
        headers: {
          Authorization: todoToken,
        },
      }

      const response = await axios.get(`${site}/todos/`, config);
      setTodoList(response.data.data)
      console.log('getTodos', todoList);
    } catch(error) {
      console.log(error);
    }
  };
  const addTodo = async() => {
    try {
      const config = {
        headers: {
          Authorization: todoToken,
        },
      }
      const params = {
        content: newTodo
      }
      const response = await axios.post(`${site}/todos/`, params, config);
      setNewTodo('');
      getTodos();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo =async(id) => {
    const config = {
      headers: {
        Authorization: todoToken,
      },
    }
    await axios.delete(`${site}/todos/${id}`, config);
    getTodos();
  };
  const updateTodo =async(id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.content = todoEdit[id];
    const config = {
      headers: {
        Authorization: todoToken,
      },
    }
    await axios.put(`${site}/todos/${id}`, todo, config);
    getTodos();
    setTodoEdit({
      ...todoEdit,
      [id]: ''
    })
  };
  const toggleStatus = async(id) => {
    const config = {
      headers: {
        Authorization: todoToken,
      },
    }
    await axios.patch(`${site}/todos/${id}/toggle`, {}, config);
    getTodos();
  }
  return(
    <>
      <h2>todolist</h2>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='New Todo'
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}> 
            {item.content} {item.status ? '完成' : '未完成'}
            | {todoEdit[item.id]}
            <input type="text" placeholder='更新值' onChange={
              (e) => {
                const newTodoEdit = {
                  ...todoEdit
                }
                newTodoEdit[item.id] = e.target.value
                setTodoEdit(newTodoEdit)
              }
            } />
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
            <button onClick={() => updateTodo(item.id)}>Update</button>
            <button onClick={() => toggleStatus(item.id)}>
              Toggle Status
            </button>
          </li>
        })}
      </ul>
    </>
  )
}

export default TodoList