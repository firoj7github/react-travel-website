
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
