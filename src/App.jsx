import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import AllEmployeesContainer from './components/AllEmployeesContainer.jsx';
import AllTasksContainer from './components/AllTasksContainer.jsx';
import AddEmployee from './components/AddEmployee';
import SingleEmployeeView from './components/SingleEmployeeView'
import NewTaskContainer from './components/NewTaskContainer.jsx';


function App() {
  return (
    <div>
      {/* <SingleEmployeeView/> */}
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AllEmployeesView" element={<AllEmployeesContainer/>}/>
          <Route path="/AllTasksView" element={<AllTasksContainer/>}/>
          <Route path="/AddEmployee" element={<AddEmployee/>}/>
          <Route path="/SingleEmployeeView/:id" element={<SingleEmployeeView/>}/>
          <Route path="/NewTaskView" element={<NewTaskContainer/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App