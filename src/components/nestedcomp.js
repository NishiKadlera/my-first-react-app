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
               <span>Employee Name is <b><Employee/></b></span> <br></br>
            </div>
        
        );
    }
}
export default Details;