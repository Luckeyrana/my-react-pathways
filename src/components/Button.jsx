import React from "react";




export function MyButton({ name }) {
 const handleClick = () =>{
     console.log('Button clicked', name);
 }

  return <button onClick={handleClick}>{name}</button>;
}

export function MyButtonTwo({count, onClick}){
     return (
        <button onClick={onClick}>  Clicked {count} times </button>
     )
    
}

