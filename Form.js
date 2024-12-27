import React,{useState} from 'react';
const App = ()=> {
    const [data,setData]=useState({
        username:"",
        email:""
    })
    const{username,email} = data;
    const changeHandler = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(username.length <= 5){
            alert("user name must be atleast 6 characters");
        }
        else{
            console.log(data);
            alert("Form Submitted Sucessfully")
        }
    }
    return(
<div>
<center>
    <form onSubmit = {onSubmit}>
<input type ="text" name ="username" value = {username}
 onChange = {changeHandler}/> <br/>
 <input type ="email" name ="email" value = {email}
 onChange = {changeHandler}/> <br/>
 <input type = "submit" name = "submit"/>

 </form>
            </center>
        </div>
    )

};
export default App