import React, { Component } from 'react';
import LabService from '../../../Services/LabService';

class createLabComponent extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            labId: '',
            labTest: '',
            testResult:'',
            patient:'',
            gender:'',
            consultant:'',
            date:'',
            time:''
        }
    
        this.changeLabIdHandler = this.changeLabIdHandler.bind(this);
        this.changeLabTestHandler = this.changeLabTestHandler.bind(this);
        this.saveLab = this.saveLab.bind(this);
    }
    
    saveLab = (l) => {
        l.preventDefault();
    let lab = {labId: this.state.labId, labTest: this.state.labTest, testResult: this.state.testResult,
        patient: this.state.patient, gender: this.state.gender, consultant: this.state.consultant,
        date: this.state.date, time: this.state.time};       
    

   if(this.state.labTest === ''){alert("Cannot leave the field Empty!")}
   else if(this.state.testResult === ''){alert("Cannot leave the field Empty!")}
   else if(this.state.patient === ''){alert("Cannot leave the field Empty!")}
   else if(this.state.gender === ''){alert("Cannot leave the field Empty!")}
   else if(this.state.consultant === ''){alert("Cannot leave the field Empty!")}
   else if(this.state.date === ''){alert("Cannot leave the field Empty!")}
   else if(this.state.time=== ''){alert("Cannot leave the field Empty!")}

else{
    console.log('lab =>' + JSON.stringify(lab));
    
    LabService.createLab(lab).then(res => {
        this.props.history.push('/lab/lab-report');});

    };}    
    
    
    changeLabIdHandler = (event)=> {
        this.setState({labId: event.target.value});
    }
    
    changeLabTestHandler = (event)=> {
        this.setState({labTest: event.target.value});
    }
    
    changeTestResultHandler = (event)=> {
        this.setState({testResult: event.target.value});
    }
    
    changePatientHandler = (event)=> {
        this.setState({patient: event.target.value});
    }
    
    changeGenderHandler = (event)=> {
        this.setState({gender: event.target.value});
    }
    
    
    changeConsultantHandler = (event)=> {
        this.setState({consultant: event.target.value});
    }
    
    changeDateHandler = (event)=> {
        this.setState({date: event.target.value});
    }
    
    changeTimeHandler = (event)=> {
        this.setState({time: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/lab/lab-report');
    }
    
     
        render() {
            return (
                <div>
                    <div className="container" >
                        <div className="row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Lab Report</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Lab ID</label>
                                            <input placeholder="Lab ID" name="labId" className="form-control"
                                            value={this.state.labId} onChange={this.changeLabIdHandler} />      
                                        </div>
    
     
    
    
                                        <div className="form-group">
                                            <label>Lab Test</label>                                       
                                            <input placeholder="Lab Test" name="labTest" className="form-control"
                                            value={this.state.labTest} onChange={this.changeLabTestHandler} />          
                                        </div>
                                                                  
        
                                        <div className="form-group">
                                            <label>Test Result</label>
                                            <textarea placeholder="Test Result"  cols='15' rows='4' name="testResult" className="form-control"
                                            value={this.state.testResult} onChange={this.changeTestResultHandler} />          
                                        </div>
    
                                        
                                        
    
                                        <div className="form-group">
                                            <label>Patient</label>
                                            <input placeholder="Patient" name="patient" className="form-control"
                                            value={this.state.patient} onChange={this.changePatientHandler}  />          
                                        </div>
    
    
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandler}/>      
                                        </div>     
                                                                             
                
                         
    
                                        <div className="form-group">
                                            <label>Consultant</label>
                                            <input placeholder="Consultant" name="consultant" className="form-control"
                                            value={this.state.consultant} onChange={this.changeConsultantHandler} />      
                                            
                                        </div>
    
                                        <div className="form-group">
                                         
                                            <label>Date</label>
                                            <input placeholder="Date" name="date" input type="date" className="form-control"
                                            value={this.state.date} onChange={this.changeDateHandler}/>        
                                        </div>
    
                                        <div className="form-group">
                                            <label>Time</label>
                                            <input placeholder="Time" name="time" input type="time" className="form-control"
                                            value={this.state.time} onChange={this.changeTimeHandler}/>         
                                        </div>
    
    
                                        <button className="btn btn-success" onClick={this.saveLab}> SAVE DETAILS</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}   style={{ marginLeft: "10px"}}>CANCEL</button>                        
                                                                                                                                                            
    
                                    </form>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    
    export default createLabComponent;