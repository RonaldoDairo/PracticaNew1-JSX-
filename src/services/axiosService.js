import APIRequest from "../utils/config/axios.config";

export default function getRandomUser() {
    return APIRequest.get('/' ,{
        validateStatus: function (status) {
        return status < 500; // Resuelve solo si el código de estado es menor que 500
      }
    }); //La https://randomuser.me/api
    
}