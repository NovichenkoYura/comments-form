//@ts-nocheck
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const { value } = useSelector((state) => state.comments);
  return <div className="App">{value}</div>;
}

export default App;
