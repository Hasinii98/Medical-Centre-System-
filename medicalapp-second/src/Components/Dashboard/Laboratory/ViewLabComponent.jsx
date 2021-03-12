import React, { Component } from 'react';
import LabService from '../../../Services/LabService';
 


class ViewLabComponent extends Component {


    constructor(props){
        super(props)

        this.state = {
            labId: this.props.match.params.labId,
            labTest: '',
            testResult:'',
            patient:'',
            gender:'',
            consultant:'',
            date:'',
            time:''

        }
    }

 
componentDidMount(){
    LabService.getLabDetailsById(this.state.labId).then( (res) => {
        let lab = res.data;
        this.setState({  labId: lab.labId, labTest: lab.labTest, testResult: lab.testResult,
             patient: lab.patient, gender:lab.gender, consultant:lab.consultant, date:lab.date, time:lab.time
             });
    });
}

 


    render() {
        return (
            <div>
                 <div className= "card col-md-6 offset md-3">
                     <h3 className="text-center"> Lab Report </h3>
                                <div className="card-body">
                                    <form>
                                    <div className="row"></div>
                                     
                                    <b>Lab ID</b>
                        <div>{this.state.labId}</div>

                        <b>Lab Test</b> 
                        <div>{this.state.labTest}</div>

                        <b>Test Result</b> 
                        <div>{this.state.testResult}</div>

                        <b>Patient</b> 
                        <div>{this.state.patient}</div>

                        <b>Gender</b> 
                        <div>{this.state.gender}</div>

                        <b>Consultant</b> 
                        <div>{this.state.consultant}</div>

                        <b>Date</b> 
                        <div>{this.state.date}</div>

                        <b>Time</b> 
                        <div>{this.state.time}</div>
                    
                        <button  onClick={() => window.print()} className="btn btn-info"  style={{ marginTop: "30px", marginLeft:"380px"}}>GENERATE PDF</button>                       

    
                    </form>
                  </div>                
                 </div>
            </div>
        );
    }
}

export default ViewLabComponent;