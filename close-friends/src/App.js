import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Card from './components/Card/Card';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Card />} />
      </Routes>
    </Router>
  );
}
export default App;
