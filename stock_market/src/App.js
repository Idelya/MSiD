import React from 'react';
import './App.css';
import ChartComponent from './components/ChartBasic';
import Chooser from './components/Chooser';
import {getData} from './api/fetchData'

function App() {

  const handleChange = (market, end, start) => {
    getData(market, end, start).then(data => {
			console.log(data)
		})
  }
  return (
    <div>
      <Chooser onClick={handleChange}/>     
      <ChartComponent/>
    </div>
  );
}

export default App;
