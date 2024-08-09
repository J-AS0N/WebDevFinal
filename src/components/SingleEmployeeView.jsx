import React from 'react'
import SingleEmployeeViewCSS from '../styles/SingleEmployeeView.module.css'

function SingleEmployeeView() {
    return (
        <div className={SingleEmployeeViewCSS.container}> 
            <h1> Employee Name </h1>
            <h2> Tasks Assigned </h2>
            <button> View </button>
        </div>
    );
}

export default SingleEmployeeView;