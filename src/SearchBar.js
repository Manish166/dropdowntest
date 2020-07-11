import React from 'react'

const SearchBar = ({value, handleOnChange}) => {
    return(
        <div>
            <input
                value={value}
                placeholder="Search..."
                onChange={handleOnChange}
            />
        </div>
    )
}

export default SearchBar