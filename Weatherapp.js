import React,{useState} from 'react';
const Weatherapp =() => {
    const[city,setCity] = useState("");
    const[result,setResult] = useState("");
    const handler = (e) => {
        setCity(e.target.value);
    }
        const submitHandler = (e) => {
            e.preventDefault()

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97a9745b0c3a1f932357060a2331ab49&units=metric`).then(
response => response.json()
            ).then(data=> setResult("Temperature At"+" "+city+" "+ data.main.temp)+ "Degrees")
            setCity("");
            
        }
    
    return(
        <div>
            <center>
                <div className = "card">
                    <div className ="card-body">
                       
                        <h4 className = "card-title">Weather App</h4>
                        <form onSubmit = {submitHandler}>
                            <input type = "text" name = "city" value = {city} onChange = {handler}></input><br/><br/>
                            <input type ="submit" value = "Get Temperature "/>
                        </form>
                        <h1>{result}</h1>
                        </div>
                   
                </div>

            </center>
        </div>
    )
}
export default Weatherapp;