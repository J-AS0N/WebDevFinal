import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import AllEmployeesView from './Pages/AllEmployeesView.jsx';
import AllTasksView from './Pages/AllTasksView.jsx';
import AddEmployee from './components/AddEmployee.jsx';


function App() {
  return (
    <div>
      <AddEmployee/>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/AllEmployeesView" element={<AllEmployeesView/>}/>
    //     <Route path="/AllTasksView" element={<AllTasksView/>}/>
    //   </Routes>
    // </Router>
    
  );
}

export default App