import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleEmployeeViewCSS from '../styles/SingleEmployeeView.module.css'
import { useSelector } from 'react-redux';
import blankProfilePic from '../assets/temp.jpg';


function SingleEmployeeView() {
    const { id } = useParams();
    const employees = useSelector(state => state.employees); 
    const [employee, setEmployee] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const[modal, setModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    

useEffect(() => {
    const employeeId = parseInt(id);
    const foundEmployee = employees.find(emp => emp.id === employeeId);
    if(foundEmployee) {
        setEmployee(foundEmployee);
        setTasks(foundEmployee.tasks || []);
    } 
}, [id, employees]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // Add Task
    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }   
        
    }

    // Delete Task
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const openModal = (task) => {
        setCurrentTask(task);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
        setCurrentTask(null);
    }

    if(!employee) {
        return <p> Loading... </p>;
    }
    const priorityStyle = (priority) => {
        switch (priority) {
            case 'High':
                return SingleEmployeeViewCSS.priorityHigh;
            case 'Medium':
                return SingleEmployeeViewCSS.priorityMedium;
            case 'Low':
                return SingleEmployeeViewCSS.priorityLow;
            default:
                return '';
        }
    };

    const statusStyle = (isComplete) => {
        return isComplete ? SingleEmployeeViewCSS.statusComplete : SingleEmployeeViewCSS.statusIncomplete;
    }


    return (
        <>
            <div className={SingleEmployeeViewCSS.container}>
                <img className={SingleEmployeeViewCSS.img} src={blankProfilePic}/>
                <h1 className={SingleEmployeeViewCSS.name}> {employee.firstname} {employee.lastname} </h1>
                <p className={SingleEmployeeViewCSS.department}> {employee.department} </p>

                <Link to="/AllEmployeesView"><button className={SingleEmployeeViewCSS.back}> Back </button></Link>

                {tasks.length === 0 ? (
                    <p className={SingleEmployeeViewCSS.noTasksMessage} >No tasks assigned to this employee. </p>
                ) : (
                
                <ol className={SingleEmployeeViewCSS.taskList}>
                    <h2> <u> Assigned Tasks </u> </h2>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className={SingleEmployeeViewCSS.text}> {task.description} </span>
                            <div className={SingleEmployeeViewCSS.buttonContainer}>
                                <button className={SingleEmployeeViewCSS.view} onClick={() => openModal(task)}> View </button>
                                <Link to={`/SingleEmployeeView/${employee.id}`}></Link><button className={SingleEmployeeViewCSS.delete} onClick={() => deleteTask(index)}> Delete </button>
                            </div>
                        </li>
                    )}
                </ol>
                )}
            </div>
            {modal && currentTask && (
                <div className={SingleEmployeeViewCSS.modal}>
                    <div className={SingleEmployeeViewCSS.modalContent}>
                        <h2 className={SingleEmployeeViewCSS.taskDetails}> <u> Task Details </u> </h2>
                        <p className={SingleEmployeeViewCSS.currentTask}> Task: <b>{currentTask.description} </b></p>
                        <p> Assigned to: <b> {employee.firstname} {employee.lastname} </b></p>

                        <div className={SingleEmployeeViewCSS.PS}>
                            <p className={`${SingleEmployeeViewCSS.priority} ${priorityStyle(currentTask.priority)}`}> Priority: <b> {currentTask.priority} </b> </p>
                            <p className={`${SingleEmployeeViewCSS.status} ${statusStyle(currentTask.isComplete)}`}> Status: <b> {currentTask.isComplete ? "Complete" : "Incomplete"} </b> </p>
                        </div>
                        
                        <button className={SingleEmployeeViewCSS.modalDelete} onClick={closeModal}> Close </button>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default SingleEmployeeView