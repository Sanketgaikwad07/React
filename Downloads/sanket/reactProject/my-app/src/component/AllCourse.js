import React, { useState } from "react";

import Course from "./Course";
const Allcourse=()=>{
   
   const[courses,setCourses]=useState([
    {title:"Java Course", discription:"this is for demo"},
{title:"Djago Course", discription:"this is for demo"},
{title:"React Course", discription:"this is for demo"}
 
   
])
   
    return(
<div>
    <h1>All Course</h1>
    <p> List of course of follow
    </p>
   {
    courses.length>0? courses.map((item)=>(

        <courses course={item}/>
    )):" No course"}

</div>
    );
};
export default Allcourse;
