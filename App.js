import React,{useState,useEffect} from 'react';
import './App.css';
const App = () => {
  const[data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then
    (
      response => response.json()
    ).then(json=> setData(json))
  },[])
 return(
  <div>
    <center>
      {data.map(item=><li key ={item.id}>{item.title}</li> )}
    </center>
  </div>
 )  

  
  
}
export default App;