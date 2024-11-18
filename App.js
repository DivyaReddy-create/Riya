import React ,{useState} from 'react';
import TodoList from './TodoList';
const App = () => {
const [task,setTask] = useState("");
const[todos,setTodos] = useState([]);

const handler = (e) =>
{
    setTask(e.target.value);
}
const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
}
const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo,index) => index!==indexValue);
    setTodos(newTodos);

}
return (
    <div>
        
        <center>
            <div  className = "card"></div>
            <div className ="card-body"></div>
        <h5 className="card-title">Todo Management Application</h5><br/>
        <form onSubmit = {submitHandler}>
            <input type = "text" name ="task" value = {task} onChange = {handler}  ></input>           
            <input  type = "submit" value = "Add" name ="Add"></input><br></br>
             </form> <TodoList todolist = {todos} deleteHandler = {deleteHandler}/>
        </center>
    </div>
);
}
export default App;