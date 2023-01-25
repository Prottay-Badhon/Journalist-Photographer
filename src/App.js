import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
