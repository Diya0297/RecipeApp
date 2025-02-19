import logo from './logo.svg';
import './App.css';
import {Router, Routes, Route} from "react-router-dom";
import Navbar from './Componants/Navbar';
import Home from './pages/home';
import Favourites from './pages/favourites';
import Details from './pages/details';

function App() {
  return (
    <div>
      <div className="min-h-screen m-0  text-[#5C3D2E] text-lg bg-[#f3e5d8]">
        <Navbar />
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route
            path='/favourites'
            element={<Favourites />}
           />
          <Route 
          path='/recipe-item/:id'
          element={<Details />}
          />
        </Routes>

      </div>
    </div>
  );
}

export default App;
