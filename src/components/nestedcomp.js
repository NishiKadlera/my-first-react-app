import React from "react";

function Employee()
{
    return <span> John</span>;
}

export class Details extends React.Component
{
    render()
    {
        return <span>Employee Name is <Employee/></span>;
    }
}
export default Details;