import React from "react";

function HomeCompBasic(props)
{
    return (
    <div>
    <h1>Props Concept</h1>   
    <p> Hello! I'm <b>{props.name}</b> and I'm from <b>{props.Department}</b> Department</p> 
    </div>
    );
}

export default HomeCompBasic;