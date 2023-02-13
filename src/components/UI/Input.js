import React from "react";
import classes from './Input.module.css'

const Input = React.forwardRef((props,ref)=>{
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* {...props.input} is similar to type={props.input.type}  id={props.input.id}*/}
            <input ref ={ref} {...props.input}/>
        </div>
    );
});

export default Input;