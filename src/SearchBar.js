import React from 'react'
import searchIcon from './searchIcon.png'

const SearchBar = ({value, handleOnChange}) => {
    return(
        <div style={{textAlign : 'center', border: '1px solid black', borderRadius : '4px', marginLeft : '4px', marginRight : '4px'}}>
            <img style={{height : '12px'}} src={searchIcon}/>
            <input
                style={{width : '90%', border : 'none'}}
                value={value}
                placeholder="Search..."
                onChange={handleOnChange}
            />
        </div>
    )
}

export default SearchBar