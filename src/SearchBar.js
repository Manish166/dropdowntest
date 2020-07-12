import React from 'react'

const SearchBar = ({value, handleOnChange}) => {
    return(
        <div style={{padding : '10px'}}>
            <input
                value={value}
                placeholder="Search..."
                onChange={handleOnChange}
            />
        </div>
    )
}

export default SearchBar