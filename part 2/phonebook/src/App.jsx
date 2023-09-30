import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { json_handle } from '../services/json_handle'

import Filter from './Filter'
import Form from './Form'
import Persons from './Persons'
import Status from './Status'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [status,setStatus] = useState({
    type:'',
    message: null
  })
  const [searchTerm,setSearchTerm] = useState('')

  const handleNameChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchTerm =(event)=>{
    var searchWord = event.target.value
    setSearchTerm(searchWord)
  }

  const showStatus = (message,type) => {
    const newStatus = {
      type,
      message
    }
    setStatus(newStatus)
    setTimeout(()=>{
      setStatus({
        type:'',
        message: null
      })
    },2000)
  }

  const saveName = (event) => {
    event.preventDefault()
    const handle = new json_handle('persons')
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const name_found = persons.filter((person)=>person.name.toLowerCase()===newName.toLowerCase())
    if(name_found.length!=0){
      if(window.confirm(`${newName} is already added to phonebook, Replace old number with new one`)){
        console.log('name found',name_found)
        console.log('passing id',name_found[0].id)
        
        handle.update(name_found[0].id,newPerson)
        .then(updatedPerson=>{
          const newPersons = persons.map(person=>person.id!=name_found[0].id?person:updatedPerson)
          setPersons(newPersons)
        })
        .catch(error=>{
          showStatus(`${name_found[0].name} is already deleted from phonebook`,'danger')
        })
      
      
      }
    }
    else{
      
      handle.add(newPerson).then((person)=>{
        const newPersons = persons.concat(person)
        showStatus(`${person.name} added to phonebook`,'success')
        setPersons(newPersons)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const dataFetchHandler = () => {
    const handle = new json_handle('persons')
    handle.getAll().then(persons=>{
      setPersons(persons)
    })
  }

  useEffect(dataFetchHandler,[searchTerm])

  console.log('call everytime')
  var personsToShow = persons 
  if(searchTerm.length!=0){
    personsToShow = persons.filter((person)=>{
      if(person.name.toLowerCase().includes(searchTerm)){
        return person
      }
    })
  }

  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearchTerm}/>
      <h2>Add a new</h2>
      <Status status={status}/>
      <Form submitAction={saveName} 
          value1={newName} 
          nameChange={handleNameChange} 
          value2={newNumber} 
          numberChange={handleNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} setPersons={setPersons}/>
    </div>
  )
}

export default App