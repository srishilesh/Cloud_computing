import React from 'react'
import './mystyles.css'

class ProposalForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valueName:'',
         valueEmail:'',
         valueFund:'',
         valueURL:'',
         valueCall:'',
         valueCO:'',
         valueAmt:'',
         valueRev:'',
         valueSub:'',
         valueComm:'',
         valueNo:'',
         valueTitle:''
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "name") {
            this.setState({ valueName: event.target.value })
        }
        else if (event.target.name === "email") {
            this.setState({ valueEmail: event.target.value })
        }
        else if (event.target.name === "fund") {
            this.setState({ valueFund: event.target.value })
        }
        else if (event.target.name === "url") {
            this.setState({ valueURL: event.target.value })
        }
        else if (event.target.name === "call") {
            this.setState({ valueCall: event.target.value })
        }
        else if (event.target.name === "co") {
            this.setState({ valueCO: event.target.value })
        }
        else if (event.target.name === "amt") {
            this.setState({ valueAmt: event.target.value })
        }
        else if (event.target.name === "rev") {
            this.setState({ valueRev: event.target.value })
        }
        else if (event.target.name === "sub") {
            this.setState({ valueSub: event.target.value })
        }
        else if (event.target.name === "comm") {
            this.setState({ valueComm: event.target.value })
        }
        else if (event.target.name === "no") {
            this.setState({ valueNo: event.target.value })
        }
        else if (event.target.name === "title") {
            this.setState({ valueTitle: event.target.value })
        }
    }

    handleSubmit(event) {
        if (this.state.valueName === '' || this.state.valueEmail === '' || this.state.valueFund === '' ||
         this.state.valueURL === ''|| this.state.valueCall === ''|| this.state.valueCO === ''||
          this.state.valueAmt === ''|| this.state.valueRev === ''|| this.state.valueSub === ''||
           this.state.valueComm === ''|| this.state.valueNo === '' || this.state.valueTitle === '')
            event.preventDefault();

        this.validate();
    }
    validate(event)
    {
        var name = this.state.valueName;
        var email = this.state.valueEmail;
        var title = this.state.valueTitle;
        var fund = this.state.valueFund;
        var url = this.state.valueURL;
        var call = this.state.valueCall;
        var co = this.state.valueCO;
        var amt = this.state.valueAmt;
        var rev = this.state.valueRev;
        var sub = this.state.valueSub;
        var comm = this.state.valueComm;
        var no = this.state.valueNo;
        
        if(name!='' && email!='' && fund!='' && url!='' && call!='' && co!='' & amt!='' & rev!='' & sub!='' & comm!='' & no!='')
        {
            
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
                <div className="title">
                    <h2>Proposal Submission Form</h2>
                </div>
                <div className="info">
                    <p>Hi srishilesh@gmail.com, when you submit this form, the owner will be able to see your name and email address.</p>
                    <p><span>* </span>Required</p>
                </div>
                <form action="http://localhost:8081/form" enctype="multipart/form-data" onSubmit={this.handleSubmit} name="myform" method="POST">
                    1.Name of the PI in Amrita<span>* </span><br/>
                    <input className="gen" placeholder="Enter your answer" type="text" value={this.state.valueName} name="name" onChange={this.handleChange} /> 
                    <br/><br/>
                    2.Email Address of PI<span>* </span><br/>
                    <input className="gen" placeholder="Enter your answer" type="text" value={this.state.valueEmail} name="email" onChange={this.handleChange} /> 
                    <br/><br/>
                    3.Title of the proposal<span>* </span><br/>
                    <input className="gen" placeholder="Enter your answer" type="text" value={this.state.valueTitle} name="title" onChange={this.handleChange} /> 
                    <br/><br/>
                    4.Funding Agency<span>* </span><br/>
                    <input className="gen" placeholder="Enter your answer" type="text" value={this.state.valueFund} name="fund" onChange={this.handleChange} /> 
                    <br/><br/>
                    5.URL of the call for proposal<span>* </span><br/>
                    <input className="gen" placeholder="Enter your answer" type="text" value={this.state.valueURL} name="url" onChange={this.handleChange} /> 
                    <br/><br/>
                    6.Type of the call<span>* </span><br/><p className="eg">(International, Travel Grant etc.)</p>
                    <input className="gen" placeholder="Enter your answer" type="text" value={this.state.valueCall} name="call" onChange={this.handleChange} /> 
                    <br/><br/>
                    7.Co-PIs<span>* </span><br/><p className="eg">(For CO-PI not in CSE, mention their
                    affliation(e.g. Somasundaram, Maths, Amrita, Dr Bharadwaj, Depart of ECE, NUS, Singapore etc.)</p>
                    <input className="gen" placeholder="Enter your answer" type="text" value={this.state.valueCO} name="co" onChange={this.handleChange} /> 
                    <br/><br/>
                    8.Amount requested from India side<span>* </span><br/>
                    <input className="gen" placeholder="Enter your answer" type="number" value={this.state.valueAmt} name="amt" onChange={this.handleChange} /> 
                    <br/><br/>
                    9.Proposal review submission date<span>* </span><br/>
                    <input className="gen" placeholder="Please input date in format of M/d/yyyy" type="date" value={this.state.valueRev} name="rev" onChange={this.handleChange} /> 
                    <br/><br/>
                    10.Proposal submission date<span>* </span><br/>
                    <input className="gen" placeholder="Please input date in format of M/d/yyyy" type="date" value={this.state.valueSub} name="sub" onChange={this.handleChange} /> 
                    <br/><br/>
                    11.Review comments and the status(whether incorporated)<span>* </span><br/>
                    <input className="review" placeholder="Enter your answer" type="text" value={this.state.valueComm} name="comm" onChange={this.handleChange} /> 
                    <br/><br/>
                    12.Number of Attempts<br/><p className="eg">For a fresh proposal, the value shall be 1 and for re submission,
                     enter the attempt numer</p>
                     <input className="gen" placeholder="Enter your answer"  type="number" value={this.state.valueNo} name="no" onChange={this.handleChange} /> 
                    <br/><br/>
                    <input type="submit" value="Submit" className="submit" />
                </form>
                <p className="end">This content is created by the owner of the form. The data you submit will be sent to the form owner. Never give out your password</p>
            </div>
        )
    }
}
export default ProposalForm;

// Upload Image: <br/><input type="file" value="upload" name="upload"/>