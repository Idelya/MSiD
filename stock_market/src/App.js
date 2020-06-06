import React, { useState } from 'react';
import './App.css';
import ChartComponent from './components/ChartBasic';
import Chooser from './components/Chooser';
import {getData} from './api/fetchData'
import simulator from './controllers/model'

function App() {

  const [data, setData] = useState(null);

  const handleChange = (market, end, start) => {
      getData(market,start,end).then(d => {
        d.forEach(element => {
          element.date = new Date(element.date);
        });
        setData(d)
        simulator(d)
      })
		}
  
    return (
    <div>
      <Chooser onClick={handleChange}/>   
      <ChartComponent title="wykres danych" data={data}/>
      <span>Simulation</span>
      <ChartComponent title="Symulacja"data={null}/>
    </div>
  );
}

export default App;
