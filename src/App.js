import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar'
import DropdownList from './DropdownList'
import data from './data'

const App=()=> {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState(data.countries)
  const [displayDrop, setDisplayDrop] = useState(false)
  const [displayViewMore, setDisplayViewMore] = useState(true)
  const [displayAddButton, setDisplayAddButton] = useState(false)
  const optionsLimit=7
  const moreToView = data.countries.length-optionsLimit
  useEffect(()=>{
    console.log('useEffect')
    if (searchValue.length>2){
      const filteredCountries = data.countries.filter(country=>country.countryName.toLowerCase().includes(searchValue.toLowerCase()))
      setCountries(filteredCountries)
      if (filteredCountries.length==0){
        setDisplayAddButton(true)
      } else {
        setDisplayAddButton(false)
      }
      setDisplayViewMore(false)
    }           
    if (searchValue.length<=2){
      const countriesToIterate = data.countries.slice(1, optionsLimit)
      setCountries(countriesToIterate)
      setDisplayViewMore(true)
    }
  },[searchValue])

  const handleOnChange = (e)=>{
    setSearchValue(e.target.value)
  }

  const toggle= ()=>{
    displayDrop ? setDisplayDrop(false) : setDisplayDrop(true)
  }

  const handleViewMoreClick = ()=>{
    setCountries(data.countries)
    setDisplayViewMore(false)
  }
  const addCountry=()=>{
    let country = {"countryId" : 0, "countryName" : ""}
    country.countryId=data.countries.length +1
    country.countryName=searchValue
    data.countries.push(country)
  }
  return (
    <div>
      <button onClick={toggle}>Select a Location</button>
      {displayDrop && 
        <div>
          <SearchBar value={searchValue} handleOnChange={handleOnChange}/>
          <DropdownList countries={countries}/>
          {displayViewMore && <p onClick={handleViewMoreClick}>{moreToView} more</p>}
          {displayAddButton && <button onClick={addCountry}>Add and Select</button>}
        </div>
      }
    </div>
    
  );
}

export default App
