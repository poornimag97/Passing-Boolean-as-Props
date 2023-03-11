import React from "react";


const Course=(props)=>{
    if(props.data.courseAvail===true)
    {
        return(
            <>
            <h1>{props.data.courseName}</h1>
            <h2>{props.data.courseDuration}</h2>
           <button style={{color:"green"}}> Available</button>
            </>

        )
    }
    else
    {
        return(
            <>
            <h1>{props.data.courseName}</h1>
            <h2>{props.data.courseDuration}</h2>
           <button style={{color:"red"}}> Not Available</button>
            </>
            
        )
    }
}
export default Course;
