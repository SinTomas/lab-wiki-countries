import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import CountryDetails from './Components/CountryDetails';
import CountryList from './Components/CountryList';
import {Routes, Route} from "react-router-dom";

let apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
    let [fetching, setFetching] = useState(false);
    let [countries, setCountries] = useState([]);

    useEffect(() => {
      axios.get(apiURL).then((response)=>{
        setCountries(response.data);
        setFetching(true);
      })
    })
  return (
    <div className="App">
      <Header/>
      <CountryList countries = {countries}/>
    </div>
  )
}
export default App;