import { json_handle } from "../services/json_handle"

const Person = ({person,setPersons,persons}) => {
    const deleteResource = (id) => {
        if(window.confirm('Are you want to delete resource')){
            const handle = new json_handle('persons')
            handle.delete(id)
            const newPersons = persons.filter(person=>id!=person.id)
            setPersons(newPersons)
        }
    }

    return (
        <>
        <span className="person-row">
            <p>{person.name} {person.number}</p>
            <button onClick={()=>deleteResource(person.id)}>delete</button>
        </span>
        </>
        
    )
}

const Persons = ({persons,setPersons}) => {
    console.log('rendering persons',persons)
    return (
        <>
        {
            persons.map(person=><Person person={person} setPersons={setPersons} persons={persons} key={person.id}/>)
        }
        </>
    )
}

export default Persons