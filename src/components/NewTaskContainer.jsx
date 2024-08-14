import NewTaskView from "../Pages/NewTaskView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTask } from "../Redux Store/TasksSlice"
import { fetchEmployees } from "../Redux Store/EmployeeSlice"

function NewTaskContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);

    const handleSubmit = (e) => {
        // Prevent server submission
        e.preventDefault();

        // Get data from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // Create the task object and dispatch the `addTask` thunk
        const newTask = {
          description: formJson.taskContent,
          priority: formJson.taskPriority,
          employeeId: JSON.parse(formJson.employeeId)
        };

        if (!formJson.taskContent || !formJson.taskPriority) {
          alert ("Please fill out all fields.");
          return;
        } 

        dispatch(addTask(newTask));
        alert("Task successfully added!");
        // Reset the form so another task can be added
        e.currentTarget.reset();
      }

    return (
        <NewTaskView handleSubmit={handleSubmit} employees={employees}/>
    );
}

export default NewTaskContainer;