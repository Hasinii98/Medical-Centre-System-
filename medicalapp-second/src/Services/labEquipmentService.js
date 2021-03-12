import axios from 'axios';
const EQUIPMENT_API_BASE_URL = "http://localhost:8080/api/v1/equipment";

class labEquipmentService{

    getEquipments(){
        return axios.get(EQUIPMENT_API_BASE_URL);
         }

         createEquipment(equipment){
            return axios.post(EQUIPMENT_API_BASE_URL, equipment);
        }

        getEquipmentDetailsById(equipmentId){
            return axios.get(EQUIPMENT_API_BASE_URL + '/' + equipmentId);
    }

    updateEquipmentDetails(equipment, equipmentId){
        return axios.put(EQUIPMENT_API_BASE_URL +'/'+ equipmentId, equipment);
    }

    deleteEquipment(equipmentId){
        return axios.delete(EQUIPMENT_API_BASE_URL  + '/' + equipmentId);
    }

}

export default new labEquipmentService()