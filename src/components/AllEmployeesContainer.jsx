import AllEmployeesView from '../Pages/AllEmployeesView';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../Redux Store/EmployeeSlice';

function AllEmployeesContainer() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <AllEmployeesView employees={employees} onDelete={handleDelete} />
  );
}

export default AllEmployeesContainer;