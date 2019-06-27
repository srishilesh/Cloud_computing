import React from "react"

class Tryreact extends React.Component{

    render(props)
    {
        const styles={
            color:"blue",
            
        }
        return(
        <div>
            <h1 /*style={styles}*/ className="samplereactcss">Hello from tryreact.js class {this.props.firstname+" "+this.props.lastname}</h1>
        </div>)
    }
}
/*
function Tryreact()
{
    return(
        <div>
            <h1>Hello from tryreact.js</h1>
        </div>
    )
}
*/
export default Tryreact;