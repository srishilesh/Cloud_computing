import React from "react"

class Blood extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value1:'', value2:'',value3:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "user") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "pass") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "phone") {
            this.setState({ value3: event.target.value })
        }
       
    }

    handleSubmit(event) {
        alert('A details submitted: ' + this.state.value1 + " " + this.state.value2 + " " +this.state.value3);
        if (this.state.value1 === '' || this.state.value2 === '' || this.state.value3 === '')
            event.preventDefault();
    }
    render() {
        return (
            <div class = "main">
                <h2>Register as a Blood Donor</h2>
                <div class="login">
                    <h3>Login Information</h3>
                    Full Name *<br></br><input></input>
                    Password *<br></br><input></input>
                    Email ID *<br></br><input></input>
                    Confirm Password *<br></br><input></input>

                </div>
                <form action="http://localhost:8080/register" enctype="multipart/form-data" onSubmit={this.handleSubmit} name="myform" method="POST">
                    Username : <input type="text" value={this.state.value1} name="user" onChange={this.handleChange} /> <br/><br/>
                    Password : <input type="text" value={this.state.value2} name="pass" onChange={this.handleChange} /> <br/><br/>
                    Phone : <input type="number" value={this.state.value3} name="phone" onChange={this.handleChange} /> <br/><br/>
                    
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Blood;

// Upload Image: <br/><input type="file" value="upload" name="upload"/>