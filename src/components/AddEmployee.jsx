import AddEmployeeCSS from '../styles/AddEmployee.module.css'
import {useState} from 'react'

function AddEmployee({onAddEmployee}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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

    const handleSubmit = (event) => {
        event.preventDefault();

        if (firstName && lastName && department) {
            onAddEmployee({firstName, lastName, department});
            setFirstName("");
            setLastName("");
            setDepartment("");
        } else {
            alert("Please fill out all fields.");
        }
    };


    return(
        <div className={AddEmployeeCSS.container}>
            <h1 className={AddEmployeeCSS.text}> Add New Employee </h1>
            <form className={AddEmployeeCSS.form} onSubmit={handleSubmit}>
                <input className={AddEmployeeCSS.input}
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />

                <input className={AddEmployeeCSS.input}
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />

                <input className={AddEmployeeCSS.input}
                    type="text"
                    placeholder="Enter Department"
                    value={department}
                    onChange={handleDepartmentChange}
                />

                <p className={AddEmployeeCSS.text1}> Name: {firstName} {lastName}</p>
                <p className={AddEmployeeCSS.text1}> Department: {department} </p>

                <button className={AddEmployeeCSS.add} type="submit"> CONFIRM </button>
            </form>
        </div>

    )
}

export default AddEmployee;