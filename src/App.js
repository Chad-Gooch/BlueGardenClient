import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Sitenav from './home/Sitenav.js';
import Welcome from './home/Welcome.js';
import GardenIndex from './mygarden/GardenIndex.js';
import SearchPlant from './SearchPlant/SearchPlant.js';
import SignIn from './login/SignIn';


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }


  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sitenav updateToken={updateToken} sessionToken={sessionToken} clearToken={clearToken}/>}>
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/GardenIndex' element={<GardenIndex token={sessionToken}/>} />
          <Route path='/SearchPlant' element={<SearchPlant token={sessionToken}/>} />
          <Route path='/SignIn' element={<SignIn updateToken={updateToken}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;