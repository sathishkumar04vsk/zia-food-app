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
      <h1 className="text-center text-3xl font-bold">Daily Todo</h1>
      <div className="mt-4">
        <label className="block text-xl font-bold mb-2" htmlFor={id}>Task</label>
        <input
          value={task}
          className="border px-2 mr-4 h-12 focus:border-1 focus-visible:!border-1 focus-visible:!border-green-800 focus:border-green-900 hover:border-green-600 shadow-md rounded-md w-full max-w-xl"
          id={id}
          name="todo-list"
          
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-green-800 text-white px-6 rounded-md py-3" onClick={handleAddTask} style={{ marginLeft: "5px" }}>
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
