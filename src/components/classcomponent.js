import React from "react";

export class ClassCompBasic extends React.Component
{
    render()
    {
        return (
        <div>
         <h1>Class Component</h1> 
        <p>I'm a Class Component. A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. The component also requires a render() method, this method returns HTML.</p>
        </div>
        )
    }
}
export default ClassCompBasic;
