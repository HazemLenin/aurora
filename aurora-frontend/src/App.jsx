import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Home
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
);
}

export default App;
