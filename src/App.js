import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar'
import DropdownList from './DropdownList'
import data from './data'

const App=()=> {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState(data.countries)
  const [display, setDisplay] = useState(false)
  const [moreToView, setMoreToView] = useState(0)

  useEffect(()=>{
    console.log('useEffect')
    if (searchValue.length>2){
      const filteredCountries = countries.filter(country=>country.countryName.toLowerCase().includes(searchValue))
      setCountries(filteredCountries)
    }
    if (searchValue.length<=2){
      const countriesToIterate = data.countries.slice(1, optionsLimit)
      setMoreToView(data.countries.length- optionsLimit)
      setCountries(countriesToIterate)
    }
  },[searchValue])
  const optionsLimit=5

  const handleOnChange = (e)=>{
    setSearchValue(e.target.value)
  }

  const toggle= ()=>{
    display ? setDisplay(false) : setDisplay(true)
  }

  const showAll = ()=>{
    setCountries(data.countries)
  }
  return (
    <div>
      <button onClick={toggle}>Select a Location</button>
      {display && 
        <div>
        <SearchBar value={searchValue} handleOnChange={handleOnChange}/>
        <DropdownList countries={countries} moreToView={moreToView}/>
        <p onClick={showAll}>{moreToView} more</p>
        </div>
      }
    </div>
    
  );
}

export default App
