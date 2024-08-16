import {useState} from 'react'
import AllTasksViewCSS from '../styles/AllTasksView.module.css'
import { Link } from 'react-router-dom';


function AllTasksView({ tasks, deleteTask }) {
    const [modal, setModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
  
  
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
            <Link to="/NewTaskView"> <button className={AllTasksViewCSS.add}> Add Tasks </button> </Link>
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
              <h2> <u> Task Details </u> </h2>
              {/* <p> Task Name </p> */}
              <p className={AllTasksViewCSS.p}> Task: <b> {selectedTask.description} </b> </p>
              <p className={AllTasksViewCSS.p}> Assigned to: <Link to={`/SingleEmployeeView/${selectedTask.employeeId}`}> <b> {selectedTask.employee ? `${selectedTask.employee.firstname} ${selectedTask.employee.lastname}` : 'Unassigned'} </b> </Link> </p>
              
              <div className={AllTasksViewCSS.PS}> 
                <p className={`${priorityStyle(selectedTask.priority)}`}> Priority: {selectedTask.priority} </p>
                <p className={`${statusStyle(selectedTask.isComplete)}`}> Status: {selectedTask.isComplete ? 'Complete' : 'Incomplete'} </p>
              </div>
  
              <button className={AllTasksViewCSS.modalDelete} onClick={toggleModal}> Close </button>
              <button className={AllTasksViewCSS.modalEdit}> Edit </button>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default AllTasksView;