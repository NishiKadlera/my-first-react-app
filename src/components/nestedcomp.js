import React from "react";

function Employee()
{
    return <span> John</span>;
}

export class Details extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>Nested Components</h1>
               <span>Employee Name is <b><Employee/></b></span> <br></br>
            </div>
        
        );
    }
}
export default Details;