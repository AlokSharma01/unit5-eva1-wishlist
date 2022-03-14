import React from "react";
import { useState } from "react";
import { v4 as uuidv4, v4 } from 'uuid';



// here we are uplifting todos and setTodos from todo.jsx file using props

export const TodoInput = ({todos,setTodos})=>{

    let [value,setValue] = useState("");

    return (

    <div>

        <div>
            <h1>Todo List</h1>
            {/* we use onchange in input tag and can call directly setvalue function here */}
            <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            {/* we need a button */}
            <button onClick={()=>{

                //incase there is no value entered in input box we need a condition
                if(value){

                    // add the value to list using spread which stores prev list 
                    setTodos([...todos,{
                        
                        value,
                        id: v4()
                    }]);
                   // console.log(todos)
                    setValue("") //it will empty the input box after add button clicked
                }
                else{

                    console.log("enter value")
                }

            }
            
            }>
                ADD ITEM
            </button>
        </div>

    </div>
    );
}