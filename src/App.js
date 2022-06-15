import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import fetchRockets from './api/rocketApiCall';
import { getRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function data() {
      const rockets = await fetchRockets();
      dispatch(getRockets(rockets));
    }
    data();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
