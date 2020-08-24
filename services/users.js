import {http} from './config'

export default {
    listar: () => {
        return http.get('http://jsonplaceholder.typicode.com/users')
    }       
}

