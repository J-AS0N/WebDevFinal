import '../styles/App.css'
import blankProfilePic from '../assets/temp.jpg';
import { Link } from 'react-router-dom';
import AllEmployeeCSS from '../styles/AllEmployeesView.module.css'

function AllEmployeesView({employees, onDelete}) {
  
  if (!employees) {
    return <div> Loading... </div>;
  }

  return (
    <>
    <Link to={"/"}> <button className={AllEmployeeCSS.back}> Back </button> </Link>
      <div>
        {employees.length === 0 ? (  // If the length is 0, display "No employees found." else...
          <p> No employees found. </p>
        ) : (
          employees.map(employee => (
            <div className={AllEmployeeCSS.card} key={employee.id}>
              <img className={AllEmployeeCSS.img} src={blankProfilePic}/>
              <h1 className={AllEmployeeCSS.name}> {employee.firstname} {employee.lastname}</h1>
              <p className={AllEmployeeCSS.department}> {employee.department || "N/A"} </p>
              {/* <p> Employee ID: {employee.id} </p> */}
              <Link to={`/SingleEmployeeView/${employee.id}`}> <button className={AllEmployeeCSS.view}> View </button> </Link>
              <button className={AllEmployeeCSS.delete} onClick={() => onDelete(employee.id)}> Delete </button>
            </div>
          ))
        )}
      <Link to="/AddEmployee" style={{textDecoration: 'none'}}> <button className={AllEmployeeCSS.add}> Add Employee </button> </Link>
      </div>
    </>
  );
  
}

export default AllEmployeesView;