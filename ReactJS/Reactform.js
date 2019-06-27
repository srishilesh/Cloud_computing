import React from 'react'

class Reactform extends React.Component{
    constructor(props){
        super(props)
        this.state = {value1:'',value2:''}
        this.changeuser = this.changeuser.bind(this)
        this.changepass = this.changepass.bind(this)
        this.handle = this.handle.bind(this)
    }
    changeuser(event)
    {
        this.setState({value1:event.target.value})
        
    }
    changepass(event)
    {
        this.setState({value2:event.target.value})
    }
    handle(event)
    {
        alert(this.state.value1)
        alert(this.state.value2)
    }

    render()
    {
        return(
            <div>
                <form>
                    Username &nbsp;
                    <input type="text" value={this.state.value1} onChange={this.changeuser} name="username"/>
                    <br></br>
                    Password &nbsp;
                    <input type="password" value={this.state.value2} onChange={this.changepass} name="password"/>
                    <br></br>
                    <input type="button" value="button" onClick={this.handle}></input>
                </form>
            </div>
        )
    }
}

export default Reactform;