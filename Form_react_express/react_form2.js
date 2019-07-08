import React from 'react'

class FormAdmission extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {value1:'',value2:'',value3:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        if(event.target.name === "name")
        {
            this.setState({value1:event.target.value})
        }
        else if(event.target.name === "id")
        {
            this.setState({value2:event.target.value})
        }
        else if(event.target.name === "designation")
        {
            this.setState({value3:event.target.value})
        }
    }
    handleSubmit(event)
    {
        alert('Details submitted are: '+this.state.value1+' '+this.state.value2+' '+this.state.value3);
        if (this.state.value1 === '' || this.state.value2 === '' || this.state.value3 === ' ')
            event.preventDefault();
    }
    render(props)
    {   
        return(
            <div className="formcss">
            <form action="http://localhost:8081/" onSubmit={this.handleSubmit} name="admission" method="POST">
                <label>Employee Name:</label>
                <input type="text" value={this.state.value1} name="name" onChange={this.handleChange}/><br/>
                <label>Employee ID:</label>
                <input type="number" value={this.state.value2} name="id" onChange={this.handleChange}/><br/>
                <label>Designation</label>
                <select name="designation" value={this.state.value3} onChange={this.handleChange}><br/>
                    <option value="ceo">CEO</option>
                    <option value="founder">Founder</option>
                    <option value="director">director</option>
                </select><br/>
                <input type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}

export default FormAdmission