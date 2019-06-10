//APISAUCE
import { create } from 'apisauce'

//APPEL API
const api = create({
    baseURL: 'http://api.elorri.fr/',
    headers: { 
        Accept: 'application/json'
    },
})

export default api