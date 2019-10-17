import React from 'react'
import './mystyles.css'

class ShippingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valueName:'',
         valueZip:'',
         valuePhone:'',valueEmail:''
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.validate = this.validate.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "name") {
            this.setState({ valueName: event.target.value })
        }
        else if (event.target.name === "zip") {
            this.setState({ valueZip: event.target.value })
        }
        else if (event.target.name === "phone") {
            this.setState({ valuePhone: event.target.value })
        }
        else if (event.target.name === "email") {
            this.setState({ valueEmail: event.target.value })
        }
    }

    handleSubmit(event) {
        //alert("Validating details")
        if (this.state.valueName === '' || this.state.valueZip === '' || this.state.valuePhone === '' || this.state.valueEmail === '')
            event.preventDefault();

        this.validate(event);
    }
    
    validate(event)
    {
        var name = this.state.valueName;
        var zip = this.state.valueZip;
        var phone = this.state.valuePhone;
        var email = this.state.valueEmail;
        if(name!=='' && zip!=='' && phone!=='' && email!=='')
        {
            if((zip.length!==5) || (phone.length!==10))
            {
                alert("Name - >10 characters, Zip - 5 characters, Phone - 10 characters ");
                return;
            }
            if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false)
            {
                alert("You have entered an invalid Email address")
            }
            if(/^[a-zA-Z0-9]*$/.test(name)==false)
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
                    <h2>Shipping Info</h2>
                </div>
                <div className="info">
                    <p><span>* </span>Required</p>
                </div>
                <form action="http://localhost:3001/form"  onSubmit={this.handleSubmit} name="propform" method="POST">
                    Product Name<span>* </span><br/>
                    <input className="gen" placeholder="Your answer" type="text" value={this.state.valueName} name="name" onChange={this.handleChange} /> 
                    <br/><br/>
                    Email Address<span>* </span><br/>
                    <input className="gen" placeholder="Your answer" type="text"  value={this.state.valueEmail} name="email" onChange={this.handleChange} /> 
                    <br/><br/>
                    Shipping City Zipcode<span>* </span><br/><p>Zip code of a city in USA</p>
                    <input className="gen" placeholder="Your answer" type="number"  value={this.state.valueZip} name="zip" onChange={this.handleChange} /> 
                    <br/><br/>
                    Phone Number<span>* </span><br/>
                    <input className="gen" placeholder="Your answer" type="number" value={this.state.valuePhone} name="phone" onChange={this.handleChange} /> 
                    <br/><br/>
                    Product Image<span>* </span><br/>
                    <input type="file" value="" name="upload"/> 
                    <br/><br/>
                    <input type="submit" value="SUBMIT" className="submit" />
                </form>
                
            </div>
        )
    }
}
export default ShippingForm;

// Upload Image: <br/><input type="file" value="upload" name="upload"/>


