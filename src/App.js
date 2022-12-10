import './App.css';
import { useState } from 'react';

const App = () => {
  const [turno, setTurno] = useState("X");
  const [squares, serSquares] = useState(Array(9).fill(null));
  const [scores, setScore] = useState({
    X: 0,
    O: 0,
  });
  return (
    <div className="container">
      
    </div>
  );
}

export default App;
