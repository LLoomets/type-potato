import React from 'react';
import './App.css';
import MyForm from './components/MyForm';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      {/* <MyForm /> */}
      
    </>
    
  );
}

export default App;
