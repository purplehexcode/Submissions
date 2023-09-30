import axios from "axios"
import { useEffect, useState } from "react"

const DataView = ({data,value,setValue}) => {
    const [weather,setWeather] = useState(null)
    const updateCountry = (country) => {
        setValue(country)
    }
    useEffect(()=>{
        console.log(data,'in useeffect')
        if(data.length!=0){
            const latlang = data[0].latlng
            const api_key = ''
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlang[0]}&lon=${latlang[1]}&appid=${api_key}`
            const promise = axios.get(url)
            promise.then((response)=>{
                console.log(response)
                setWeather(response.data)
            })
        }
        
    },[data])
    console.log('api key',import.meta.env.api_key)
    console.log(data.length)
    console.log(data.length>10)
    if(data.length===0 && value){
        return <p>No Results Found</p>
    }
    else if(data.length===1){
        console.log(data)
        console.log(Object.keys(data[0]).includes('capital'))
        return (
            <div>
                <h2>{data[0].name.common}</h2>
                {
                Object.keys(data[0]).includes('capital') && <p>Capital: {data[0].capital.map(cap=><span>{cap} </span>)}</p>
                } 
                {
                Object.keys(data[0]).includes('area') && <p>Area: {data[0].area}</p>
                }
                {
                    Object.keys(data[0]).includes('languages') && <div>
                    <h4>Languages:</h4> 
                    <ul> 
                        {
                        Object.
                        values(data[0].languages)
                        .map(lang => <li>{lang}</li>)
                        }
                        
                    </ul>
                    </div>
                }
                {
                Object.keys(data[0]).includes('flags') && <img alt={data[0].flags.alt} src={data[0].flags.png} width={150} height={150}/>
                }  
                {
                    weather && <div>
                    <h4>Weather in {data[0].capital.map(cap=><span>{cap} </span>)}</h4>
                    <p>temperature {(weather.main.temp-273.15).toFixed(2)} celcius</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width={100} height={100}/>
                    <p>Speed {weather.wind.speed} m/s</p>
                    </div>
                } 
                

            </div>
        )
    }
    else if(data.length>10 && value){
        return <p>Too many matches,specify another filter</p>
    }
    else if(data.length<=10 && data.length>0){
        return ( 
            <div>
                {
                data.map(country=>{
                    return(
                        <div className="country-container">
                            <p>{country.name.common}</p>
                            <button onClick={()=>updateCountry(country.name.common)}>show</button>
                        </div>    
                )
                })
            }
            </div>  
        )
    }
    
}

export default DataView