import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import AllEmployeesView from './Pages/AllEmployeesView';
import AllTasksView from './Pages/AllTasksView';
import AddEmployee from './components/AddEmployee';


function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AllEmployeesView" element={<AllEmployeesView/>}/>
          <Route path="/AllTasksView" element={<AllTasksView/>}/>
          <Route path="/AddEmployee" element={<AddEmployee/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App