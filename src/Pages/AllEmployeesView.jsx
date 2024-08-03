import '../styles/App.css'
import AllEmployeeCSS from '../styles/AllEmployeesView.module.css'
import React, { useState } from 'react';

function AllEmployeesView() {
  // Cards Component (objects)
  const [cards, setCards] = useState([
    { id: 1, imgSrc: 'https://wallpapers.com/images/hd/caption-intense-gaze-of-freedom-eren-yeager-pfp-3q27s0q13rqidb20.jpg', firstName: 'Eren', lastName: 'Yeager', department: 'Titan' },
    { id: 2, imgSrc: 'https://avatarfiles.alphacoders.com/176/176267.jpg', firstName: 'Mikasa', lastName: 'Ackerman', department: 'Slayer' },
    { id: 3, imgSrc: 'https://avatarfiles.alphacoders.com/370/thumb-1920-370596.png', firstName: 'Levi', lastName: 'Ackerman', department: 'Slayer' },
  ]);

  // Delete Card
  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div>
      {cards.length === 0 ? (  // If the length is 0, display "No employees found." else...
        <h1>No employees found.</h1>
      ) : (
        cards.map(card => (
          <div className={AllEmployeeCSS.card} key={card.id}>
            <img className={AllEmployeeCSS.img} src={card.imgSrc}/>
            <h2 className={AllEmployeeCSS.firstName}> {card.firstName} </h2>
            <h2 className={AllEmployeeCSS.lastName}> {card.lastName} </h2>
            <h3 className={AllEmployeeCSS.department}> {card.department} </h3>
            <button className={AllEmployeeCSS.view}> View </button>
            <button className={AllEmployeeCSS.delete} onClick={() => handleDelete(card.id)}> Delete </button>
          </div>
        ))
      )}
    <button className={AllEmployeeCSS.add}> Add </button>
    </div>
  );
}

export default AllEmployeesView;