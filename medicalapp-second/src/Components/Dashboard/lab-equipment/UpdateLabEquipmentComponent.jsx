import React, { Component } from 'react';
import labEquipmentService from '../../../Services/labEquipmentService';
import 'bootstrap/dist/css/bootstrap.css';

class UpdateLabEquipmentComponent extends Component {
constructor(props){
    super(props)

    this.state = {
        equipmentId:this.props.match.params.equipmentId,   
        equipmentName:'',
        count:0

    }

    this.changeEquipmentIdHandler = this.changeEquipmentIdHandler.bind(this);
    this.changeEquipmentNameHandler = this.changeEquipmentNameHandler.bind(this);
    this.changeCountHandler = this.changeCountHandler.bind(this);
    this.updateEquipmentDetails = this.updateEquipmentDetails.bind(this);
}

componentDidMount(){
    labEquipmentService.getEquipmentDetailsById(this.state.equipmentId).then( (res) => {
        let equipment = res.data;
        this.setState({  equipmentId: equipment.equipmentId, equipmentName: equipment.equipmentName,
            count: equipment.count });
    });
}


updateEquipmentDetails = (e) => {
    e.preventDefault();
    let equipment = {equipmentId: this.state.equipmentId, equipmentName: this.state.equipmentName,
        count: this.state.count,};
    
        console.log('equipment =>' + JSON.stringify(equipment)); 
        console.log('equipmentId =>' + JSON.stringify(this.state.equipmentId));
        
        if(this.state.count <= 0){
            alert("Count value cannot be zero or less")
        }
        else{
        labEquipmentService.updateEquipmentDetails(equipment, this.state.equipmentId).then( res =>{
            this.props.history.push('/lab-equipment/equipments');
        });}


    }

 
changeEquipmentIdHandler = (event)=> {
    this.setState({equipmentId: event.target.value});
}

changeEquipmentNameHandler = (event)=> {
    this.setState({equipmentName: event.target.value});
}

changeCountHandler = (event)=> {
    this.setState({count: event.target.value});
}


cancel(){
    this.props.history.push('/');
}



    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Lab Equipments</h3>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                        <label>Equipment ID</label>
                                        <input placeholder="Equipment ID" readOnly= {true} name="equipmentId" className="form-control"
                                        value={this.state.equipmentId} onChange={this.changeEquipmentIdHandler}/>      
                                    </div>

                                    <div className="form-group">
                                        <label>Equipment Name</label>
                                        <input placeholder="Equipment Name"  readOnly= {true} name="equipmentName" className="form-control"
                                        value={this.state.equipmentName} onChange={this.changeEquipmentNameHandler}/>      
                                    </div>

                                    <div className="form-group">
                                        <label>Count</label>
                                        <input placeholder="Count" type="number" name="count" className="form-control"
                                        value={this.state.count} onChange={this.changeCountHandler}/>      
                                    </div>

                                    
                             
                                    <button className="btn btn-success" onClick={this.updateEquipmentDetails}>UPDATE </button>
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


export default UpdateLabEquipmentComponent; 