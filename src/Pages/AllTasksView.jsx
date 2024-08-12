import {useState} from 'react'
import AllTasksViewCSS from '../styles/AllTasksView.module.css'
import { Link } from 'react-router-dom';


function AllTasksView({ tasks, deleteTask }) {
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
 
      setTasks(t => [...t, { name: newTask, priority: 'Low', isComplete: false }]);
      setNewTask("");
    }
  
    function handleEnter(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    }
  
    function viewTask(task) {
      setSelectedTask(task);
      setModal(true);
    }
  
    const toggleModal = () => {
      setModal(!modal);
    };

    const priorityStyle = (priority) => {
        switch (priority) {
            case 'High':
                return AllTasksViewCSS.priorityHigh;
            case 'Medium':
                return AllTasksViewCSS.priorityMedium;
            case 'Low':
                return AllTasksViewCSS.priorityLow;
            default:
                return '';
        }
    };

    // if isComplete === true, use AllTasksViewCSS.statusComplete else... use AllTasksViewCSS.statusIncomplete
    const statusStyle = (isComplete) => {
        return isComplete ? AllTasksViewCSS.statusComplete : AllTasksViewCSS.statusIncomplete;
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
            <button className={AllTasksViewCSS.add} onClick={addTask}> Add </button>
          </div>
  
          <div className={AllTasksViewCSS.container3}>
            {tasks.length === 0 ? (
              <p className={AllTasksViewCSS.noTask}> No tasks available. Add a task. </p>
            ) : (
              <ol>
                {tasks.map((task, index) =>
                  <li key={index}>
                    {task.description}
                    <div className={AllTasksViewCSS.buttoncontainer}>
                      <p className={`${AllTasksViewCSS.priority} ${priorityStyle(task.priority)}`}> Priority Level: <br/> {task.priority} </p>
                      <p className={`${AllTasksViewCSS.status} ${statusStyle(task.isComplete)}`}> Status: <br/> {task.isComplete ? 'Complete' : 'Incomplete'} </p>
                      <button className={AllTasksViewCSS.view} onClick={() => viewTask(task)}> View </button>
                      <button className={AllTasksViewCSS.delete} onClick={() => deleteTask(task.id)}> Delete </button>
                    </div>
                  </li>
                )}
              </ol>
            )}      
          </div>
        </div>
  
        {modal && (
          <div className={AllTasksViewCSS.modalOverlay} onClick={toggleModal}>
            <div className={AllTasksViewCSS.modalContent} onClick={e => e.stopPropagation()}>
              <h2> Task Details </h2>
              {/* <p> Task Name </p> */}
              <p className={AllTasksViewCSS.p}> Task: <b> {selectedTask.description} </b> </p>
              <p className={AllTasksViewCSS.p}> Assigned to: <b> {selectedTask.employee.firstname} {selectedTask.employee.lastname} </b></p>
              
              <div className={AllTasksViewCSS.PS}> 
                <p className={`${priorityStyle(selectedTask.priority)}`}> Priority: {selectedTask.priority} </p>
                <p className={`${statusStyle(selectedTask.isComplete)}`}> Status: {selectedTask.isComplete ? 'Complete' : 'Incomplete'} </p>
              </div>
  
              <button className={AllTasksViewCSS.modalDelete} onClick={toggleModal}> Close </button>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default AllTasksView;