import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
