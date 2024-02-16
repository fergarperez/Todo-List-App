/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'


function Tasks({ task, handleDelete, handleDone }) {
  return (
    <div>
      <p>{task}</p>
      <div>
        <button onClick={() => { handleDone(task) } }><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg></button>
        <button onClick={() => { handleDelete(task) }}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button>
      </div>
    </div>
  )
}

export function App() {
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = event.target.task.value;
    if(newTask !== "") {
      setTasks([...tasks, newTask]);
    }
    event.target.task.value = "";
  }

  function handleDelete( task ) {
    const newArr = tasks.filter( item =>  task !== item );
    setTasks(newArr);
  }

  function handleDone( task ) {
    const index = tasks.findIndex( item => task === item );
    if (index !== -1) {
      alert("Tarea " + tasks[index] + " hecha");
    }
  }

  return (
    <main className='main'>
      <h1>TODO-List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name='task'/>
        <button>Add</button>
      </form>

      <section>
        {
          tasks.map( (task) => (
            <Tasks 
            key={task}
            task={task}
            handleDelete={handleDelete}
            handleDone={handleDone} />
          ))
        }
      </section>
    </main>
  )
}

