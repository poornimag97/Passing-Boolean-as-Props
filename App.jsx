import React from 'react'
import Course from './Course';

const App=()=>{
    return(
        <>
      < Course data={{
        courseName:"java full stack",
        courseAvail:false,
        courseDuration:"3 months"
       }}/>
        </>)
}  
export default App;