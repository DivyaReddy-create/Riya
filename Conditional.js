import React,{useState} from 'react';
import './App.css';
const App = () => {
const[data,setData]=useState(false);
const toggleLogin = () => {
    setData(!data);
    console.log("data");
}
    return(
<div>
    <center>
        <h1>{data? "Login":"Logout"}</h1>
        <button onClick={toggleLogin}>{data ? "Logout":"Login"}</button>
    </center>
</div>
    )

}
export default App;