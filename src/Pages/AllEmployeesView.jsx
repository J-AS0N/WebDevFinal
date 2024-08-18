import '../styles/App.css'
import blankProfilePic from '../assets/temp.jpg';
import { Link } from 'react-router-dom';
import AllEmployeeCSS from '../styles/AllEmployeesView.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../Redux Store/EmployeeSlice';

function AllEmployeesView() {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  if (!employees) {
    return <div> Loading... </div>;
  }

  return (
    <>
      <Link to={"/"}>
        <button className={AllEmployeeCSS.back}> Back </button>
      </Link>
      <div>
        {employees.length === 0 ? (
          <p> No employees found. </p>
        ) : (
          employees.map(employee => (
            <div className={AllEmployeeCSS.card} key={employee.id}>
              <img className={AllEmployeeCSS.img} src={blankProfilePic} alt="Profile" />
              <h1 className={AllEmployeeCSS.name}>{employee.firstname} {employee.lastname}</h1>
              <p className={AllEmployeeCSS.department}>{employee.department || "N/A"}</p>
              <Link to={`/SingleEmployeeView/${employee.id}`}>
                <button className={AllEmployeeCSS.view}> View </button>
              </Link>

              <Link to={`/EditEmployeeView/${employee.id}`}>
                <button className={AllEmployeeCSS.edit}> Edit </button>
              </Link>
              <button className={AllEmployeeCSS.delete} onClick={() => handleDelete(employee.id)}> Delete </button>
            </div>
          ))
        )}
        <Link to="/AddEmployee" style={{ textDecoration: 'none' }}>
          <button className={AllEmployeeCSS.add}> Add Employee </button>
        </Link>
      </div>
    </>
  );
}

export default AllEmployeesView;