import React, { Component } from 'react';
import labEquipmentService from '../../../Services/labEquipmentService';
import 'bootstrap/dist/css/bootstrap.css';

class CreateLabEquipmentComponent extends Component {
constructor(props){
    super(props)

    this.state = {
        equipmentId:'',
        equipmentName:'',
          count :''         

    }

    this.changeEquipmentIdHandler = this.changeEquipmentIdHandler.bind(this);
    this.changeEquipmentNameHandler = this.changeEquipmentNameHandler.bind(this);
    this.changeCountHandler = this.changeCountHandler.bind(this);
    this.saveEquipment = this.saveEquipment.bind(this);
}

saveEquipment = (e) => {
    e.preventDefault();
    let equipment = {equipmentId: this.state.equipmentId, equipmentName: this.state.equipmentName,
         count: this.state.count};

         console.log('equipment =>' + JSON.stringify(equipment));
         console.log('equipmentId =>' + JSON.stringify(this.state.equipmentId));     
         
          
         if(this.state.count <= 0 ){
            alert("Count value cannot be zero or less!")
        }else if(this.state.count  == /[A-Za-z]+/){
            alert(" Please enter a numeric value!")
         } else{
        labEquipmentService.updateEquipmentDetails(equipment, this.state.equipmentId).then( res =>{
            this.props.history.push('/lab-equipment/equipments');
        });
    
        
          
          if(this.state.equipmentName === ''){alert("Cannot leave the field empty!")}
         else if(this.state.count === ''){alert("Cannot leave the field empty!")}
         else{
                 labEquipmentService.createEquipment(equipment).then(res => {
                     this.props.history.push('/lab-equipment/equipments');
                  });
         }
         }
        
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
                                        <input placeholder="Equipment ID" name="equipmentId" className="form-control"
                                        value={this.state.equipmentId} onChange={this.changeEquipmentIdHandler}/>      
                                    </div>

                                    <div className="form-group">
                                        <label>Equipment Name</label>
                                        <input placeholder="Equipment Name" name="equipmentName" className="form-control"
                                        value={this.state.equipmentName} onChange={this.changeEquipmentNameHandler}/>      
                                    </div>

                                    <div className="form-group">
                                        <label>Count</label>
                                        <input placeholder="Count"   name="count" className="form-control"
                                        value={this.state.count} onChange={this.changeCountHandler}/>      
                                    </div>

                                                                  
                                    
                                    <button className="btn btn-success" onClick={this.saveEquipment}> ADD EQUIPMENT</button>
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

export default CreateLabEquipmentComponent;