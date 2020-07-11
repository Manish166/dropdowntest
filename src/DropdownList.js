import React from 'react'
const DropdownList = ({countries}) =>{
    const countriesList = countries.map((country)=>{
        return(
            <li key={country.countryId}>
                {country.countryName}
            </li>
        )
    })
    return(
        <ul>{countriesList}</ul>
    )
}

export default DropdownList