import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const updateTime =  () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <div class="box">
        <h1 class="time">{time}</h1>
      </div>
    </>    
  );
}

export default App;
