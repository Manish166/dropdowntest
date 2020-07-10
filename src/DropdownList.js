import React from 'react'
import data from './data'
const DropdownList = () =>{
    const countries = data.countries
    const contList = countries.map((country)=>{
        return(
            <li key={country.countryId}>
                {country.countryName}
            </li>
        )
    })
    return(
        <ul>{contList}</ul>
    )
}

export default DropdownList