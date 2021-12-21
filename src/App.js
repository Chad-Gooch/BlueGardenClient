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
  const [berryHolder, setBerryHolder] = useState([]);
  let berryHolder1 = [];
  let item = [];

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    };
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
  
  const fetchBerries = () => {
    for(let i = 1; i < 31; i++){
      fetch(`https://pokeapi.co/api/v2/berry/${i}`)
      .then((response) => response.json()) 
      .then((data) => {
        fetch(data.item.url)
        .then((res) => res.json())
        .then((itemItem)=> item.push(itemItem))
        berryHolder1.push(data)}
        ).then(result => console.log(result))
      };
    };
    fetchBerries();
    
    const combine = () => {
    let img = item;
    let berry = berryHolder1;
    let showBerries = [];
  
    for (let i=0; i < berry.length; i++) {
      berry[i].image = img[i].sprites.default;
      berry[i].descript = img[i].flavor_text_entries[0].text;
      showBerries.push(berry[i])
    };
    setBerryHolder(showBerries);
    console.log(berryHolder1)
};

  return (
  <div style={{background:"#e1e1f9"}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sitenav updateToken={updateToken} sessionToken={sessionToken} clearToken={clearToken}/>}>
          <Route path='/' element={<Welcome />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/GardenIndex' element={<GardenIndex token={sessionToken} berryHolder={berryHolder} />} />
          <Route path='/SearchPlant' element={<SearchPlant token={sessionToken} berryHolder={berryHolder} combine={combine} />} />
          <Route path='/SignIn' element={<SignIn updateToken={updateToken} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;