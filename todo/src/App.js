import './App.css';
import { useState,useRef } from 'react';

function App() {

  const[todolist,setTodoList] = useState([]);
  const [currentTask,setcurrentTask] = useState("")

  const inputTask = useRef(null)

  const addTask =() =>{
    setTodoList([...todolist,{task: currentTask, completed: false}]);
    inputTask.current.value = "";
  };

  const deleteTask= (taskToDelete) => {
    setTodoList(todolist.filter((task) => {
      return task.task !== taskToDelete
    }))
  };
 const completeTask = (taskToComplete) => {
  setTodoList(todolist.map((task) => {
    return task.task === taskToComplete 
    ? {task:taskToComplete, completed:true}
    : {task:task.task, completed:task.completed ? true:false };
  }));
 };

  return (
    <div className="App">
     <h1 className='heading'> Todo List </h1>
    
     <div>
      <input
      ref={inputTask} type="text" placeholder="Task...."
      onKeyDown={(event)=> {
        if (event.keyCode === 13){
          addTask();
        }
      }}
      onChange={(event) => { setcurrentTask(event.target.value);
      }}/>
        <button className='firstButton' onClick={addTask}>Add Task</button>
     </div>
     <hr/>
     <ul>
      {todolist.map((val, key) => {
        return ( 
          <div id='task'>
        <li>{val.task}</li>

        <button onClick={()=>completeTask(val.task)}>completed</button>

        <button onClick={() => deleteTask(val.task)}>X</button>

        {val.completed ? (<h1 className='completed2'>Task Completed</h1>):(<h1 className='completed'>Task Not Completed</h1>)}
        </div>
        )
      })}
     </ul>
    </div>
  );
}

export default App;
