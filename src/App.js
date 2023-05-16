
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './Components/Users/users';
import Detalis from './Components/Users/detalis';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path = {"users"} element ={<Users/>}/>
         <Route  path = {"users/:id"} element ={<Detalis/>}/>  
      </Routes>    
    </div>
  );
}

export default App;

