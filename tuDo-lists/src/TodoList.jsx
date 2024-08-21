
import "./Todo.css";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function Todo(){
    let [todos, setTodos]=useState([
        {task:"sample-task",id:uuidv4(),isDone: false}
    ]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
       setTodos((prevTodos) => {
        return [...prevTodos,{ task:newTodo, id:uuidv4(),isDone: false }];
       });
       setNewTodo("");
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
        
    };

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id));
    };

    let allMarkdAsDone=()=>{
       setTodos((prevTodos)=>(
         prevTodos.map((todo)=>{
        return {
            ...todo,
            isDone:true,
        };
            
        }))
    )

    };

    let  markAsDone=(id)=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                if(todo.id==id){ 
                    return {
                        ...todo,
                        isDone:true,
                    };    
                }else{
                    return todo;
                }
                
           
               
           }))
       )


       
    }


    return (
        <div className="main">
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
        <br></br>
        <button onClick={addNewTask}>Add Task</button>
        <br></br>
        <br></br>
        <br></br>
        <hr/>

        <h4>Task Todo</h4>
        <ul>
            {todos.map((todo)=>(
             <li key={todo.id}>
                <span style={todo.isDone ? { textDecorationLine:"line-through"}:{}}>
                    {todo.task}
                    </span>
                &nbsp;
                &nbsp;
                <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                <button onClick={()=> markAsDone(todo.id)}> MarksAss Done</button>
                </li>
                ))}
        </ul>
        <button onClick={allMarkdAsDone}>allMarkdAs Done</button>
        </div>
    )
};