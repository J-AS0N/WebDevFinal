import AllEmployeesView from '../Pages/AllEmployeesView';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../Redux Store/EmployeeSlice';

function AllEmployeesContainer() {
  console.log('AllEmployeesContainer rendered');
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching fetchEmployees")
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  if (!employees) {
    return <div> Loading... </div>;
  }

  return (
    <AllEmployeesView employees={employees} onDelete={handleDelete} />
  );
}

export default AllEmployeesContainer;