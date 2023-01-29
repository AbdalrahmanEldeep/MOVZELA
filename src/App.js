import { useContext } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import { MainData } from './components/context/Context';
import { Home } from './components/Home/Home';
import LoginPage from './components/Login/LoginPage';
import { Movie } from './components/movie/Movie';
import { Nav } from './components/nav/Nav';
import { AuthRouteProtceter } from './components/Protecters/AuthRouteProtceter';
import RouteProtceter from './components/Protecters/RouteProtceter.js';
import SigninPage from './components/Signin/SigninPage';

function App() {
  const {userData} = useContext(MainData);

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/'  element={<RouteProtceter status={userData}><Home/></RouteProtceter>}/>
           <Route path='/movie/:id'  element={<RouteProtceter><><Nav hidder={false}/><Movie/></></RouteProtceter>}/>
           <Route path='/signin' element={<AuthRouteProtceter status={userData}><SigninPage/></AuthRouteProtceter>}/>
           <Route path='/login' element={<AuthRouteProtceter status={userData}><LoginPage/></AuthRouteProtceter>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
