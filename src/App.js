import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Board from './component/tic'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Board />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
