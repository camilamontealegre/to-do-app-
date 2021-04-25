import React from 'react';
import "./index.css"
import "./components/TodoItem";
import TodoItem from './components/TodoItem';
import "./todosData";
import todosData from './todosData';

class App extends React.Component{
 constructor(){
   super()
   this.state={
     todos:todosData
   }
   this.handleChange=this.handleChange.bind(this)
 }

 handleChange(id){
 this.setState(prevState=>{

   const updatedTodos = prevState.todos.map(todo=>{
    if(todo.id===id){
      return{
        ...todo,
        completed:!todo.completed
      }
    }
    return todo
   })
   return {
     todos:updatedTodos
   }
  })
 }

  render(){
    const todoItems= this.state.todos.map(item => <TodoItem 
      myitem={item} key={item.id} handleChanges={this.handleChange}/>)

    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App;
