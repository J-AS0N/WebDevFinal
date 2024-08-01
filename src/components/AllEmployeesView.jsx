import React from 'react'
import {useState} from 'react'

function AllEmployeesView( {imgSrc, name, onDelete}) {

    return (
        
        <div className="card">
            <img className="img" src={imgSrc}></img>
            <h2 className="name"> {name} </h2>
            <button className="view"> View </button>
            <button className="delete" onClick={onDelete}> Delete </button>
        </div>
    )
}

export default AllEmployeesView;