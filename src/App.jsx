import './styles/App.css'
import AllEmployeesView from './components/AllEmployeesView';
import {useState} from 'react';

function App() {
  // Cards Component (objects)
  const [cards, setCards] = useState([
    {id: 1, imgSrc: 'https://wallpapers.com/images/hd/caption-intense-gaze-of-freedom-eren-yeager-pfp-3q27s0q13rqidb20.jpg', name: 'Eren Yeager'},
    {id: 2, imgSrc: 'https://avatarfiles.alphacoders.com/176/176267.jpg', name: 'Mikasa Ackerman'},
    {id: 3, imgSrc: 'https://avatarfiles.alphacoders.com/370/thumb-1920-370596.png', name: 'Levi Ackerman'},
  ])
  
  // Delete Card
  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id != id));
  }

  return (
    <>
      <div>
        {cards.length === 0 ? (<h1> No employees found.</h1>) : (   // if there are no card, display "No employees found", else... 
          cards.map(card => (
            <AllEmployeesView
              key={card.id}
              imgSrc={card.imgSrc}
              name={card.name}
              onDelete={() => handleDelete(card.id)}
            />
          ))
        )}
      </div>

      <div>
        
      </div>
    </>
    
  );
}

export default App