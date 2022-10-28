import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Movie } from './components/movie/Movie';
import { Nav } from './components/nav/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/movie/:id'  element={<><Nav hidder={false}/><Movie/></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
