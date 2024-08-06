import { Link } from 'react-router-dom';
import HomeCSS from '../styles/Home.module.css'

function Home() {
    return(
    <div className={HomeCSS.container}>
        <h1> WELCOME </h1>
        <Link to="/AllEmployeesView" style={{textDecoration: 'none'}}> <button className={HomeCSS.employees}> Employees </button> </Link>
        <Link to="/AllTasksView" style={{textDecoration: 'none'}}> <button className={HomeCSS.tasks}> Tasks </button> </Link>
    </div>
    )
}

export default Home;