import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleEmployeeViewCSS from '../styles/SingleEmployeeView.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, fetchTasks } from '../Redux Store/TasksSlice';
import blankProfilePic from '../assets/temp.jpg';


function SingleEmployeeView() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [tasks, setTasks] = useState([]);

    const dispatch = useDispatch();
    const allTasks = useSelector(state => state.tasks);

    const[modal, setModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    

    useEffect(() => {
        const fetchEmployeeData = async () => {
            const employeeId = parseInt(id);
            const response = await fetch(`http://localhost:5001/api/employees/${employeeId}`);
            const data = await response.json();
            setEmployee(data);
        };
        fetchEmployeeData();
        dispatch(fetchTasks());
    }, [id, dispatch]);

    useEffect(() => {
        const employeeTasks = allTasks.filter(task => task.employeeId === parseInt(id));
        setTasks(employeeTasks);
    }, [allTasks, id])


    // Delete Task
    function handleDeleteTask(taskId) {
        dispatch(deleteTask(taskId));
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
        return <p> No employees found. </p>;
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
                <Link to="/NewTaskView"> <button className={SingleEmployeeViewCSS.add}> Add Tasks </button> </Link>

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
                                <Link to={`/SingleEmployeeView/${employee.id}`}></Link><button className={SingleEmployeeViewCSS.delete} onClick={() => handleDeleteTask(task.id)}> Delete </button>
                            </div>
                        </li>
                    )}
                    <Link to={`/EditEmployeeView/${employee.id}`} > <button className={SingleEmployeeViewCSS.edit}> Edit </button> </Link>
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