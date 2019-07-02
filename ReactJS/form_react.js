import React from "react"

class form_react extends React.Component
{
    render()
    {
        return(
            <div style={{textAlign:"center",margin:"15%",border:"15%"}}>
                <h2>Student Admission form</h2>
                <div id="out" >
                <form>
                    <div id="name" style={{float:"left"}}>
                    <label>Name: &nbsp;</label>
                    <br></br>
                    <label>Age: &nbsp;</label>
                    <br></br>
                    <label>Phone number: &nbsp;</label>
                    <br></br>
                    </div>
                    <div id="inp" style={{float:"left"}}>
                    <input type="text" name="username" style={{marginLeft:"20px"}}/><br/>
                    <input type="number" name="age" style={{marginLeft:"20px"}}/><br/>
                    <input type="number" name="phone" style={{marginLeft:"20px"}}/><br/>
                    </div>
                </form>
                </div>
                
                <button type="submit" >Validate the form</button>
            </div>
        )
    }
}

export default form_react;