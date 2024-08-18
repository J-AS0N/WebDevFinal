import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, editEmployee } from '../Redux Store/EmployeeSlice';
import { useEffect } from 'react';
import EditEmployeeView from '../Pages/EditEmployeeView';

function EditEmployeeContainer() {
    let { employeeId } = useParams();
    employeeId = parseInt(employeeId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const employee = useSelector(state => 
        state.employees.find(emp => emp.id === employeeId)
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const updates = {
            ...employee,
            firstname: formJson.firstName,
            lastname: formJson.lastName,
            department: formJson.department
        };

        dispatch(editEmployee(updates));

        alert("Employee updated!");
    }

    return <EditEmployeeView employee={employee} handleSubmit={handleSubmit} />
}

export default EditEmployeeContainer;