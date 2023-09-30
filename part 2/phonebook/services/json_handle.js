import axios from "axios"

class json_handle{
    constructor(endpoint){
        this.url = `http://localhost:3001/${endpoint}`
        
    }
    add = (person) => {
        console.log('adding person',person)
        const promise = axios.post(this.url,person)
        console.log('added person',person)
        return promise.then(person=>person.data)
    }
    getAll = () =>{
        console.log('fetching all')
        const promise = axios.get(this.url)
        console.log('fetched')
        return promise.then(response=>response.data)
    }
    delete = (id) => {
        const resource = `${this.url}/${id}`
        const promise = axios.delete(resource)
        promise.then(response=>{
            console.log('deleted resource',response.data)
        })
    }
    update = (id,resource) => {
        console.log('id',id)
        const resource_url = `${this.url}/${id}`
        const promise = axios.put(resource_url,resource)
        return promise.then(response=>response.data)
    } 
}

export {
    json_handle
}