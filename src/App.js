
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Header from './share/Header/Header';
import ServiceDetail from './pages/Home/Service/ServiceDetail/ServiceDetail';





function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/ServiceDetail' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
