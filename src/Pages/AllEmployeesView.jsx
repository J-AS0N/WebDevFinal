import '../styles/App.css'
import blankProfilePic from '../assets/blank.webp';
import { Link } from 'react-router-dom';
import AllEmployeeCSS from '../styles/AllEmployeesView.module.css'

function AllEmployeesView({employees, onDelete}) {;


  // Cards Component (objects)
  // const [cards, setCards] = useState([
  //   { id: 1, imgSrc: 'https://wallpapers.com/images/hd/caption-intense-gaze-of-freedom-eren-yeager-pfp-3q27s0q13rqidb20.jpg', firstName: 'Eren', lastName: 'Yeager', department: 'Titan' },
  //   { id: 2, imgSrc: 'https://avatarfiles.alphacoders.com/176/176267.jpg', firstName: 'Mikasa', lastName: 'Ackerman', department: 'Slayer' },
  //   { id: 3, imgSrc: 'https://avatarfiles.alphacoders.com/370/thumb-1920-370596.png', firstName: 'Levi', lastName: 'Ackerman', department: 'Slayer' },
  // ]);

  return (
    <div>
      {employees.length === 0 ? (  // If the length is 0, display "No employees found." else...
        <h1>No employees found.</h1>
      ) : (
        employees.map(employee => (
          <div className={AllEmployeeCSS.card} key={employee.id}>
            <img className={AllEmployeeCSS.img} src={blankProfilePic}/>
            <h2 className={AllEmployeeCSS.firstName}> {employee.name} </h2>
            <h2 className={AllEmployeeCSS.lastName}> {employee.lastName} </h2>
            <h3 className={AllEmployeeCSS.department}> {employee.department} </h3>
            <Link to={`/SingleEmployeeView/${employee.id}`}> <button className={AllEmployeeCSS.view}> View </button> </Link>
            <button className={AllEmployeeCSS.delete} onClick={() => onDelete(employee.id)}> Delete </button>
          </div>
        ))
      )}
    <Link to="/AddEmployee" style={{textDecoration: 'none'}}> <button className={AllEmployeeCSS.add}> Add Employee </button> </Link>
    </div>
  );
}

export default AllEmployeesView;