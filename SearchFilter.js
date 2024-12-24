import React,{useState} from "react";
import './App.css';
const App = () => {
const[data,setData] =useState('');
const items=["Apple","Banana","Orange","Grapes","Almonds"];
const filterdItems = items.filter(item => item.toLowerCase().includes(data.toLowerCase()));
console.log(data);
return(
    <div>
        <center>
        <h1>Search Filter</h1>
            <input type = "text" placeholder="search items..." value = {data} onChange ={(e)=>setData(e.target.value)}/>
<ul>
{filterdItems.length > 0 ? (filterdItems.map((item,index) => <li key = {index}>{item}</li>))
:(<li>No items found</li>)}    
    </ul>        
        </center>
    </div>
)
}
export default App;