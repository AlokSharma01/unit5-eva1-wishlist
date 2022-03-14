import { useState } from "react";
import React from "react";
import {Todo} from "./Todo"
import { TodoInput } from "./TodoInput";

export const Todos = ()=>{
    //we need an array to store the list

    let [todos,setTodos] = useState([]);

    
    const onDeleteItem= (deleteThisItem)=>{

        //we will create a new list where deleteThisItem will be missing that's how we can remove it.

        const newTodoList = todos.filter(todo => todo.id !== deleteThisItem.id);

        setTodos(newTodoList);

    }

    return (
    <>
        <TodoInput todos={todos} setTodos={setTodos} />
        <div>
            <ul>
                {/* here map will iterate todos array */}
                {todos.map((todo)=>{

                    return <Todo key ={todo.id} todo={todo} onDeleteItem={onDeleteItem} />;
                })}
               
            </ul>
        </div>
        
    </>
        
        
    );
}