import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import labEquipmentService from '../../../Services/labEquipmentService';


function searchingFor(term){
    return function(x){
        return x.equipmentName.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class ListLabEquipmentComponent extends Component {
 

constructor(props){
    super(props)
        this.state = {
            equipments: [],
            term: ""
    }
    this.searchHandler = this.searchHandler.bind(this);

    this.addEquipment = this.addEquipment.bind(this);
    this.editEquipment = this.editEquipment.bind(this);
    this.deleteEquipment = this.deleteEquipment.bind(this);
}

deleteEquipment(equipmentId){
    labEquipmentService.deleteEquipment(equipmentId).then(res => {
        this.setState({equipments: this.state.equipments.filter(equipment=> equipment.equipmentId!== equipmentId )});
    });
}


editEquipment(equipmentId){
    this.props.history.push(`/lab-equipment/update-equipment/${equipmentId}`);
}

componentDidMount(){
    labEquipmentService.getEquipments().then((res)=>{
        this.setState({equipments: res.data});

    } );
}


addEquipment(){
    this.props.history.push('/lab-equipment/add-equipment');
}


onChange = e =>{
    this.setState({ search: e.target.value});
}


searchHandler(event){
    this.setState({term: event.target.value})
}

    render() {
        const {term,equipment} = this.state;
        return (
            <div>                 
            <h2 className="text-center">Equipment List</h2>     
            <div className="row">
                    <button className="btn btn-primary" style= {{ marginBottom:"10px"}}  onClick={this.addEquipment}>+Add new Equipment</button>
                </div >   
                <div class="md-form active-cyan-2 mb-3">                 
                    <input class="form-control" type="text" onChange={this.searchHandler} value={term} placeholder="Search"  aria-label="Search" />
                    </div> 
                 
            <div className = "row">
                <table className = "table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th>Equipment ID</th>
                            <th>Equipment Name </th>
                            <th>Count </th>    
                            <th>Action</th>   
                                                 
                        </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.equipments.filter(searchingFor(term)).map(
                                    equipment=>
                                    <tr key= {equipment.equipmentId}>    
                                          <td>{equipment.equipmentId} </td>                                                                                      
                                            <td>{equipment.equipmentName} </td>
                                             <td>{equipment.count} </td>
                                         <td>
                                              <button   onClick= {() => this.editEquipment(equipment.equipmentId)}  className="btn btn-success">Update Count</button>
                                              <button style={{ marginLeft:"10px"}}  onClick={ () => this.deleteEquipment(equipment.equipmentId)} className="btn btn-danger">Delete</button>  
                                         </td>
                                  
                                    </tr>

                                )
                            }
                        </tbody>

                    </table>


            </div>
        </div>
        );
    }
}

export default ListLabEquipmentComponent;