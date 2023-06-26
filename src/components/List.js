import React, {useContext}from 'react';
import ListItem from './ListItem';
import {DataContext} from './DataProvider';


function List() {
    const [todos , setTodos]= useContext(DataContext);

    const switchComplete =id =>{

       const newTodos= [...todos]
        newTodos.forEach((todo, index)=>{
            if(index===id){
                todo.complete =!todo.complete
            }
        })
        setTodos(newTodos)
    }

    const handleEditTodos= (editvalue,id)=>{
        const newTodos=[...todos]
        newTodos.forEach((todo, index)=>{
            if(index=== id){
                todo.name=editvalue
            }
        })
        setTodos(newTodos)
    }
  return (
    <ul>


        {todos.map((todo,index) =>(
               <ListItem todo = {todo} key={index} id={index}
               checkComplete={switchComplete} handleEditTodos={handleEditTodos}/>

        ))}
       
       {/* <ListItem/>
       <ListItem/> */} 


        {/* <li>
          <label htmlfor="" className="active">
            <input type="checkbox"
            id=""/>
            Cooking To Do
            </label>

            <button >edit</button>
        </li> */}
      </ul>
  )
}

export default List
