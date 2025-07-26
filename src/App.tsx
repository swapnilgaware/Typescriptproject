import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function App() {
  const [symbol, setSymbol] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symbol.trim()) {
      navigate(`/dashboard/${symbol.toUpperCase()}`);
    }
  };

  return (
    <div className="app">
      <h1>Equity Research Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Ticker Symbol"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
