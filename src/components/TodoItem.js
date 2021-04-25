import React from 'react';

function TodoItem(props){
  
  const completedStyle={
    fontStyle:"italic",
    color:"red",
    textDecoration:"line-through"
  }

  return(
    <div className="todo-item">
        <input 
        type="checkbox" 
        defaultChecked={props.myitem.completed}
        onChange={() => props.handleChanges(props.myitem.id)}
        />
        <p style={props.myitem.completed? completedStyle: null}>{props.myitem.task}</p>
    </div>
 )
}
export default TodoItem