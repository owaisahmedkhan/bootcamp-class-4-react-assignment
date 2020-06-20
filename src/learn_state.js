import React, { useState } from "react";

function LearnState(){
    const [islit, setlit] = React.useState(true);
    const brightness = islit ? "lit" : "dark";
    var [temp, settemp] = useState(22);
   // settemp(temp => islit ? 12 : 22 ); 
    var [counter, change_counter] = useState(10);
    console.log(islit)
    function weather () {
        setlit(!islit);;
        console.log(islit)
       // temp = !islit ? 22 : 12 ; 
        settemp(temp => islit ? 12 : 22 );          
    }

    function plus() {  
        change_counter(counter => counter + 1);     
    }
    function minus() {  
        change_counter(counter => counter - 1);     
    }

    return ( <div className={`room ${brightness}` }>
        <p>Current temperateure is {temp}</p>
        <button onClick={() => weather()} >Flip</button>
        <p>plus minus buttons working : {counter} </p>
        <p>
            <button onClick={() => plus()} >+</button>
            <button onClick={() => minus()} >-</button>
        </p>
    </div> )
}



export default LearnState;