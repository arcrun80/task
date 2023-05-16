
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './Components/Users/users';
import Detalis from './Components/Users/detalis';
import Todo from './Components/Todo/todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path = {"users"} element ={<Users/>}/>
         <Route  path = {"users/:id"} element ={<Detalis/>}/>  
      </Routes>    
      <Todo/>
    </div>
  );
}

export default App;

