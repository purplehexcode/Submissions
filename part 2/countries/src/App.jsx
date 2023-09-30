import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search'
import DataView from './DataView'
import './App.css'

function App() {
  const [searchTerm,setSearchTerm] = useState('')
  const [data,setData] = useState([])

  useEffect(()=>{
    const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
    const promise = axios.get(url)
    promise.then((response)=>{
      if(searchTerm){
        const results = []
        for(let country of response.data){
          const countryName = country.name.common.toLowerCase()
          const searchValue = searchTerm.toLowerCase()
          if(countryName.includes(searchValue)){
            results.push(country)
          }
        }
        console.log(results)
        setData(results)
      }
      
    })
  },[searchTerm])

  return (
    <>
      <Search value={searchTerm} setValue={setSearchTerm}/>
      <DataView data={data} value={searchTerm} setValue={setSearchTerm}/>
    </>
  )
}

export default App
