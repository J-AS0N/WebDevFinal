import {useState} from 'react'
import AllTasksViewCSS from '../styles/AllTasksView.module.css'
import { Link } from 'react-router-dom';

function AllTasksView() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    function handleInput(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") {
            alert("Please fill out the field.")
            return;
        }
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function handleEnter(event) {
        if(event.key === 'Enter') {
            addTask();
        }
    }

    function deleteTask(index) {
        setTasks(t => t.filter((task, i) => i !== index));
    }



    return(
        <div className={AllTasksViewCSS.container}>
            <div className={AllTasksViewCSS.container2}>
                <h1 className={AllTasksViewCSS.text}> Tasks </h1>    
                <input className={AllTasksViewCSS.input} type="text" placeholder="Enter Task" value={newTask} onChange={handleInput} onKeyDown={handleEnter}></input>
                <button className={AllTasksViewCSS.add} onClick={addTask}> Add </button>
            </div>

            <div className={AllTasksViewCSS.container3}>
                <ol> 
                    {tasks.map((task, index) => 
                        <li key={index}>
                            {task}
                            <div className={AllTasksViewCSS.buttoncontainer}>
                                <button className={AllTasksViewCSS.priority}> Priority Level: <br/>High </button>
                                <button className={AllTasksViewCSS.status}> Status: <br/> COMPLETE </button>
                                <Link to={`/SingleTaskView/${index}`}> <button className={AllTasksViewCSS.view}> View </button> </Link>
                                <button className={AllTasksViewCSS.delete} onClick={() => deleteTask(index)}> Delete </button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default AllTasksView