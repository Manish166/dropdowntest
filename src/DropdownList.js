import React from 'react'
const DropdownList = ({countries, onSelectCountry}) =>{
    const countriesList = countries.map((country)=>{
        return(
            <li key={country.countryId} onClick={()=>onSelectCountry({country})}>
                {country.countryName}
            </li>
        )
    })
    return(
        <div>
            <ul style={{textAlign : 'start', 
                listStyle : 'none', 
                paddingLeft : '10px',
                paddingRight : '10px'}}>
                {countriesList}
            </ul>
        </div>
        
    )
}

export default DropdownList