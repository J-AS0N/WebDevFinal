import { Link } from "react-router-dom";
import EditEmployeeViewCSS from "../styles/EditEmployeeView.module.css"

function EditEmployeeView({ employee, handleSubmit }) {
    if (!employee) {
        return (
          <section>
            <h2>Employee not found!</h2>
          </section>
        );
    }

    return (
        <div className={EditEmployeeViewCSS.container}>
            <form className={EditEmployeeViewCSS.editForm} onSubmit={handleSubmit} id="editEmployeeForm">
                <h2 className={EditEmployeeViewCSS.title} style={{textDecoration: "underline"}}> Edit Employee Information </h2>
                
                <label className={EditEmployeeViewCSS.label}> First Name: 
                    <input className={EditEmployeeViewCSS.firstname} name="firstName" defaultValue={employee.firstname} placeholder="Enter first name" required /> 
                </label>

                <label className={EditEmployeeViewCSS.label}> Last Name: 
                    <input className={EditEmployeeViewCSS.lastname} name="lastName" defaultValue={employee.lastname} placeholder="Enter last name" required /> 
                </label>

                <label className={EditEmployeeViewCSS.label}> Department:
                    <input className={EditEmployeeViewCSS.department} name="department" placeholder="Enter department" defaultValue={employee.department} />
                </label>

                <button className={EditEmployeeViewCSS.save}> Save Changes </button>
            </form>
            <Link to={`/AllEmployeesView`}>
                <button className={EditEmployeeViewCSS.back}> Back to All Employees </button>
            </Link>
        </div>
    );
}

export default EditEmployeeView;