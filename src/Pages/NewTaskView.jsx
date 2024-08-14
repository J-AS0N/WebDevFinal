import { Link } from "react-router-dom";
import NewTaskViewCSS from '../styles/NewTaskView.module.css'

function NewTaskView({ handleSubmit, employees }) {
  let selectPriority = (
    <div className={NewTaskViewCSS.priorityLevel}>
      <p> Priority level:
        <label>
          <input type="radio" name="taskPriority" value="Low" /> Low
        </label>
        <label>
          <input type="radio" name="taskPriority" value="Medium" /> Medium
        </label>
        <label>
          <input type="radio" name="taskPriority" value="High" /> High
        </label>
      </p>
      </div>
  );

  let selectEmployee = (
    <label> Assign employee: 
      <select name="employeeId" className={NewTaskViewCSS.select} defaultValue="null">
        <option value="null"> None </option>
        {employees.map(emp => {
          let name = emp.firstname + " " + emp.lastname;
          return <option key={emp.id} value={emp.id}> {name} </option>;
        })}
      </select>
    </label>
  );
  
  return (

    <div className={NewTaskViewCSS.container}>
        <section>
        
          <form onSubmit={handleSubmit} id="newtaskform" className={NewTaskViewCSS.newtaskform}>
            <h2 className={NewTaskViewCSS.title}> <u> Add a New Task </u> </h2>

            <label>
              Description: <input name="taskContent" className={NewTaskViewCSS.taskContent} placeholder="Enter a task" />
            </label>  
            {selectPriority}
            {selectEmployee}

            <button className={NewTaskViewCSS.save}> Add Task </button>
          </form>
          <br/>
          <Link to={`/AllTasksView`} ><button className={NewTaskViewCSS.back}> Back to All Tasks </button> </Link>
        </section>
    </div>
    )

}

export default NewTaskView;