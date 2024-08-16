import AddEmployeeCSS from '../styles/AddEmployee.module.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addEmployee } from '../Redux Store/EmployeeSlice';
import { Link } from 'react-router-dom';

function AddEmployee() {
    const dispatch = useDispatch();
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleDepartmentChange(event) {
        setDepartment(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (firstname && lastname && department) {
            try {
                await dispatch(addEmployee({firstname, lastname, department}));
                alert("Employee successfully added!");
                setFirstName("");
                setLastName("");
                setDepartment("");
            } catch (error) {
                alert("Failed to add employee.");
            }
        } else {
            alert("Please fill out all fields.");
        }
    };


    return(
        <>
            <Link to="/AllEmployeesView"> <button className={AddEmployeeCSS.back}> Back </button> </Link>
            <div className={AddEmployeeCSS.container}>
                <h1 className={AddEmployeeCSS.text}> Add New Employee </h1>
                <form className={AddEmployeeCSS.form} onSubmit={handleSubmit}>
                    <input className={AddEmployeeCSS.input}
                        type="text"
                        placeholder="Enter First Name"
                        value={firstname}
                        onChange={handleFirstNameChange}
                    />

                    <input className={AddEmployeeCSS.input}
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastname}
                        onChange={handleLastNameChange}
                    />

                    <input className={AddEmployeeCSS.input}
                        type="text"
                        placeholder="Enter Department"
                        value={department}
                        onChange={handleDepartmentChange}
                    />

                    <p className={AddEmployeeCSS.text1}> Name: {firstname} {lastname}</p>
                    <p className={AddEmployeeCSS.text1}> Department: {department} </p>

                    <button className={AddEmployeeCSS.add} type="submit"> CONFIRM </button>
                </form>
            </div>
        </>

    )
}

export default AddEmployee;