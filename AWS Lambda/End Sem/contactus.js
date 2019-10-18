import React from 'react'
import './mystyles.css'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valueName:'',
         valueAddress:'',valueEmail:'',valueComment:''
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.validate = this.validate.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "name") {
            this.setState({ valueName: event.target.value })
        }
        else if (event.target.name === "address") {
            this.setState({ valueAddress: event.target.value })
        }
        else if (event.target.name === "comment") {
            this.setState({ valueComment: event.target.value })
        }
        else if (event.target.name === "email") {
            this.setState({ valueEmail: event.target.value })
        }
        
    }

    handleSubmit(event) {
        //alert("Validating details")
        if (this.state.valueName === '' || this.state.valueAdd === '' || this.state.valueComment === '' || this.state.valueEmail === '' )
            event.preventDefault();

        this.validate(event);
    }
    
    validate(event)
    {
        var name = this.state.valueName;
        var address = this.state.valueAddress;
        var comment = this.state.valueComment;
        var email = this.state.valueEmail;
        
        if(name!=='' && address!=='' && comment!=='' && email!=='')
        {
            if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) === false)
            {
                alert("You have entered an invalid Email address")
            }
            if(/^[a-zA-Z0-9]*$/.test(name)===false)
            {
                alert("You have entered an invalid Name")
            }
      
        }
        else
        {
            alert("Required fields missing");
            return;
        }

    }
    render() {
        return (
            <div className="main">
                <div className>
                    <h2>Contact Us</h2>
                </div>
                <div className="info">
                    <p><span>* </span>Required</p>
                </div>
                <form action="https://0tn2ommwce.execute-api.us-east-1.amazonaws.com/final/validate"  onSubmit={this.handleSubmit} name="propform" method="POST">
                    Name<span>* </span><br/>
                    <input className="gen" placeholder="Your answer" type="text" value={this.state.valueName} name="name" onChange={this.handleChange} /> 
                    <br/><br/>
                    Email Address<span>* </span><br/>
                    <input className="gen" placeholder="Your answer" type="text"  value={this.state.valueEmail} name="email" onChange={this.handleChange} /> 
                    <br/><br/>
                    Web Address<span>* </span><br/>
                    <input className="gen" placeholder="Your answer" type="text"  value={this.state.valueAddress} name="address" onChange={this.handleChange} /> 
                    <br/><br/>
                    Comments<span>* </span><br/>
                    <input className="gen" placeholder="Your answer" type="text" value={this.state.valueComment} name="comment" onChange={this.handleChange} /> 
                    <br/><br/>
                    <input type="submit" value="SUBMIT" className="submit" />
                </form>
                
            </div>
        )
    }
}
export default Form;

// Upload Image: <br/><input type="file" value="upload" name="upload"/>


