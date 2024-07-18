import './App.css';
import Hero from './Hero';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <div>
    <nav>
      <Link to="/RyojiBernardo" className="nav-item">Ryoji Bernardo</Link>
    </nav>
    <Routes>
      <Route path="/RyojiBernardo" element={<Hero name="Ryoji " SN="2021107273"/>} />
    </Routes>
  </div>
  );
}

export default App;
