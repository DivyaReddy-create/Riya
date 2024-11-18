import React from 'react';
const TodoList = ({todolist,deleteHandler})=> {
    return(
        <div>
            {todolist.map((todo,index) => 
            <div key = {index}>
            <center>
                <h5> {todo}  <button onClick = {() => deleteHandler(index)}> Delete</button> </h5>
            </center>
            </div>)}
            </div>
    )
}
export default TodoList;