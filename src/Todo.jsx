import React, { useCallback, useId, useState } from "react";
import { TodoList } from "./TodoList";

function Todo() {
  // [currentState, StateChangeFun] = useState(intailValue)
  // StateChangeFun( privous =>privous +1)

  // function useState(intialValue){
  // let currentValue = intialValue;
  // const changeState = (value)=>currentValue = value;
  // return [currentValue, changeState]
  // }

  const [Number, setNumber] = useState(2);

  // setNumber(3);
  // console.log(Number);
  // setNumber(5);

  const [todoList, setTodoList] = useState([]);

  const [task, setTask] = useState("");

  // ()=>setCount( count +1 )
  const handleAddTask = () => {
    if (task === "") {
      alert("Task should not be empty");
    } else {
      setTodoList((sathish) => [...sathish, task]);
      setTask("");
    }
  };

  const handleDelete = useCallback((id)=>{
      setTodoList(prev=>prev.filter((item, index)=>index !==id));
  },[])
  
  const id = useId();
  return (
    <div className=" max-w-3xl mx-auto">
      <h1>Daily Todo</h1>
      <div className="mt-4">
        <label htmlFor={id}>Task</label>
        <input
          value={task}
          className="border mr-4 shadow-md rounded-md w-96"
          id={id}
          name="todo-list"
          style={{ height: "40px" }}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask} style={{ marginLeft: "5px" }}>
          Add Task
        </button>
      </div>

      <div style={{ margin: "10px 0" }}>
        {todoList.map((item,index) => (
          <TodoList key={index} index={index} item={item} setTodoList={setTodoList} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
