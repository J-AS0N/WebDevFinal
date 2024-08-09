import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import AllEmployeesContainer from './components/AllEmployeesContainer.jsx'
import AllEmployeesView from './Pages/AllEmployeesView';
import AllTasksView from './Pages/AllTasksView';
import AddEmployee from './components/AddEmployee';
import SingleEmployeeView from './components/SingleEmployeeView'
import SingleTaskView from './components/SingleTaskView'


function App() {
  return (
    <div>
      {/* <SingleEmployeeView/> */}
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AllEmployeesView" element={<AllEmployeesView/>}/>
          <Route path="/AllTasksView" element={<AllTasksView/>}/>
          <Route path="/AddEmployee" element={<AddEmployee/>}/>
          <Route path="/SingleEmployeeView" element={<SingleEmployeeView/>}/>
          <Route path="/SingleTaskView" element={<SingleTaskView/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App