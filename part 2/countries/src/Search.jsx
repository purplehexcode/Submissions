import { useEffect } from "react"

const Search = ({value,setValue}) => {
    const updateValue = (event) => {
        setValue(event.target.value)
    }
    return (
        <div>
            <span>
                <p>Find countries</p>
            </span>
            <span>
                <input type="search" 
                placeholder="Search countries" 
                value={value}
                onChange={updateValue}
                />
            </span>
        </div>
    )
}

export default Search