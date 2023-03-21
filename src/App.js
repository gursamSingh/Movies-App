import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import MovieDetails from './Components/MovieDetails';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Navbar/>,<Banner/>,<Movies/>]}/>
        <Route path='/favourites' element={[<Navbar/>,<Favourites/>]}/>
        <Route path='/movie-details' element={[<Navbar/>,<MovieDetails/>]}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
