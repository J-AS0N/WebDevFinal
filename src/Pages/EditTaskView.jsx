import { Link } from "react-router-dom";
import EditTaskViewCSS from "../styles/EditTaskView.module.css"

function EditTaskView({ task, employees, handleSubmit}) {
    if (!task) {
        return (
          <section>
            <h2> Task not found! </h2>
          </section>
        );
      }

      return (
        <div className={EditTaskViewCSS.container}>
            <form className={EditTaskViewCSS.editTaskForm} onSubmit={handleSubmit} id="edittaskform">
                <h2 className={EditTaskViewCSS.title} style={{textDecoration: "underline",}}> Edit task information </h2>
                    <label> Description: 
                        <input className={EditTaskViewCSS.taskDescription} name="taskContent" defaultValue={task.content} placeholder="Enter a task" required/> 
                    </label> 

                    <p> Priority level:
                    <label>
                        <input type="radio" name="taskPriority" value="Low" required/> Low
                    </label>
                    <label>
                        <input type="radio" name="taskPriority" value="Medium" /> Medium
                    </label>

                    <label>
                        <input type="radio" name="taskPriority" value="High" /> High
                    </label>
                    </p>

                    <label> Completion status:
                    <select className={EditTaskViewCSS.status} name="completed" defaultValue={task.completed} required>
                        <option value="false">In Progress</option>
                        <option value="true">Completed</option>
                    </select>
                    </label>
                <br/>
                <label> Assign employee:
                <select className={EditTaskViewCSS.select} name="employeeId" defaultValue="null" required>
                    <option value="null">None</option>
                    {employees.map(emp => {
                    let name = emp.firstname + " " + emp.lastname;
                    return <option key={emp.id} value={emp.id}>{name}</option>;
                    })}
                </select>
                </label>
                <button className={EditTaskViewCSS.save}>Save Task</button>
            </form>
            <Link to={`/AllTasksView`}> <button className={EditTaskViewCSS.back}> Back to all tasks </button> </Link>
        </div>

      );
}

export default EditTaskView;