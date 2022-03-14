import React from "react";

import { useState } from "react";

import styles from "./todo.module.css";

export const Todo = ( {todo , onDeleteItem} )=> {

    //for strike we need a variable which has boolean value;
   
    let [isStriked,setIsStriked]= useState(false);

    let [isEditOn, setIsEditOn] = useState(false);

    return (

        <li className={styles.todoItem}>
            {isEditOn? 
                (
                    <input type = "text" />
                ) :
                <>
                    {/* for strike condition */}
                    <input type="checkbox" onChange={()=>{

                    setIsStriked(!isStriked);
                    }}/>

                    {/* if checkbox checked it will put a line in that text */}
                    <span className={isStriked ? styles.strike : styles.normal}>

                        {todo.value}
                    </span>
                          
                </> 
            }
            
            <button onClick={() => onDeleteItem(todo)}>Delete</button>
            <button onClick={() => setIsEditOn(!isEditOn)}>{isEditOn? "Cancle edit":"Edit"}</button>
        </li>
    ); 
}