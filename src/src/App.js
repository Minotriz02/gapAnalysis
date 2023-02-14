import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Menu from './components/menu/Menu';
import MapTools from './pages/mapTools/MapTools';


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/maptools" element={<MapTools />} />
      </Routes>
    </Router>
  );
}

export default App;
