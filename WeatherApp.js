import React,{useState}from 'react';
import './WeatherApp.css';
const App = ()=>{
  const[name,setName]=useState('');
  const[result,setResult] = useState('');
  const onChange = (e)=>{
    setName(e.target.value);
  }
    const submitHandler = (e)=>{
e.preventDefault();
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
  response => response.json()
).then(
  data => {
    const kelvin = data.main.temp;
    const celsius = kelvin-273.15
    setResult("Temperature at"+" "+name+" "+Math.round(celsius)+"°C")
setName("")
  }
)
console.log(name);
    }
  
  return(
    <div>
      <center>
    <div className = "card">
      
      <div className = "card-body">
      <h1 className = "title">Weather App</h1>
      <form onSubmit = {submitHandler}>
      <input type = "text" name = "name" value = {name} onChange = {onChange} /><br/><br/>
    
      <input type = "submit" value = "Get Temperature"/>
      </form>
      <h4>{result}</h4>
    </div>
    </div>
    </center>
    </div>
  )
}
export default App;