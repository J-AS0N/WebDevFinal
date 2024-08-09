import {useState} from 'react'
import AllTasksViewCSS from '../styles/AllTasksView.module.css'
import { Link } from 'react-router-dom';

function AllTasksView() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [modal, setModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    function handleInput(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") {
            alert("Please fill out the field.");
            return;
        }
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function handleEnter(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    function deleteTask(index) {
        setTasks(t => t.filter((task, i) => i !== index));
    }

    function viewTask(task) {
        setSelectedTask(task);
        setModal(true);
    }

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
        <Link to={"/"}> <button className={AllTasksViewCSS.back}> Back </button> </Link>
            <div className={AllTasksViewCSS.container}>
                <div className={AllTasksViewCSS.container2}>
                    <h1 className={AllTasksViewCSS.text}>Tasks</h1>
                    <input
                        className={AllTasksViewCSS.input}
                        type="text"
                        placeholder="Enter Task"
                        value={newTask}
                        onChange={handleInput}
                        onKeyDown={handleEnter}
                    />
                    <button className={AllTasksViewCSS.add} onClick={addTask}>Add</button>
                </div>

                <div className={AllTasksViewCSS.container3}>
                    <ol>
                        {tasks.map((task, index) =>
                            <li key={index}>
                                {task}
                                <div className={AllTasksViewCSS.buttoncontainer}>
                                    <p className={AllTasksViewCSS.priority}> Priority Level: <br/> High </p>
                                    <p className={AllTasksViewCSS.status}> Status: <br/> COMPLETE </p>
                                    <button className={AllTasksViewCSS.view} onClick={() => viewTask(task)}> View </button>
                                    <button className={AllTasksViewCSS.delete} onClick={() => deleteTask(index)}> Delete </button>
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
            </div>

            {modal && (
                <div className={AllTasksViewCSS.modalOverlay} onClick={toggleModal}>
                    <div className={AllTasksViewCSS.modalContent} onClick={e => e.stopPropagation()}>
                        <h2> Single Task View </h2>
                        <p> {selectedTask} </p>
                        <p> Description </p>
                        
                        <div className={AllTasksViewCSS.PS}> 
                            <p> Priority </p>
                            <p> Status </p>
                        </div>

                        <button className={AllTasksViewCSS.modalDelete} onClick={toggleModal}> Close </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AllTasksView