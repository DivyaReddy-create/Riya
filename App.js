import React,{useState} from 'react';
import './App.css';
const App = () => {
  const[data,setData] = useState(0);

  return(
    
    <div>
      <center>
        <h1>{data}</h1>
      
        <button onClick = {() => setData(data+1)}>Increment</button>
        <button onClick = {() => setData(data-1)}>Decrement</button>
        <button onClick = {() => setData(0)}>Reset</button>
      </center>
    </div>
  )
}
export default App;