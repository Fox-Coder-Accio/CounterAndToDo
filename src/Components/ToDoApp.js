import React,{useState} from "react"; 
import {useSelector, useDispatch} from "react-redux";
import {addTodo, deleteTodo,updateTodo} from "../redux/actions/todoActions"


const ToDoApp = () => {
   const [task, setTask] = useState("")
   const [update, setUpdate] = useState(false)
   const [updateId, setUpdateId] = useState(null)
   const todos = useSelector(state=> state.todos)
   console.log(todos)

   const dispatch = useDispatch()


   function handleSubmit(e){
       e.preventDefault()
       if(update==false){
       dispatch(addTodo({id: todos.length+1, title: task}))
       }
       else if(update==true){
              dispatch(updateTodo(updateId,task))
                setUpdate(false)
                setUpdateId(null)
       }
       setTask("")
   }

   function handleDeleteTodo(todo_id){
      dispatch(deleteTodo(todo_id))
   }

    function implementUpdate(item){
        setUpdate(true)
        setTask(item.title)
        setUpdateId(item.id)
    }


    return(
        <div>
               <h3> {update==true?"Update ToDo": "Add ToDo"} </h3>
               <form onSubmit={handleSubmit}>
                     <input type="text" placeholder="Enter a task"
                        value={task}
                        onChange={(e)=>setTask(e.target.value)}
                     />
                     <button type="submit">{update==true?"Update ToDo": "Add ToDo"}</button>
               </form>


               <ul> 
                {
                    todos.length>0 && todos.map(item =>(
                         
                               <li key={item.id}>{item.title}
                                   <button onClick={()=>handleDeleteTodo(item.id)}> D </button>
                                   <button onClick={()=>implementUpdate(item)}> U </button>
                               </li>

                    ))
                }
            </ul>
        </div>
    )
}


export default ToDoApp;