import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditTask from './components/EditTask/EditTask';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/edit/:idEdit' element={ <EditTask/>}/>
      </Routes>

    </div>
  );
}

export default App;