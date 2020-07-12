import React, {useState, useEffect} from "react"
import SearchBar from './SearchBar'
import DropdownList from './DropdownList'
import data from './data'
import drop from './dropImage.png'

const App=()=> {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState(data.countries)
  const [displayDrop, setDisplayDrop] = useState(false)
  const [displayViewMore, setDisplayViewMore] = useState(true)
  const [displayAddButton, setDisplayAddButton] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('Select a location')
  const optionsLimit=7
  const moreToView = data.countries.length-optionsLimit
  

  useEffect(()=>{
    console.log('useEffect')
    if (searchValue.length>2){
      const filteredCountries = data.countries.filter(country=>country.countryName.toLowerCase().includes(searchValue.toLowerCase()))
      if (filteredCountries.length==0){
        console.log("length 0")
        setDisplayAddButton(true)
      } else {
        console.log("length not 0")
        setDisplayAddButton(false)
      }
      setCountries(filteredCountries)
      setDisplayViewMore(false)
    }           
    if (searchValue.length<=2){
      const countriesToIterate = data.countries.slice(1, optionsLimit)
      setCountries(countriesToIterate)
      setDisplayViewMore(true)
      setDisplayAddButton(false)
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
    country.countryName=searchValue[0].toUpperCase() + searchValue.slice(1)
    data.countries.push(country)
  }

  const onSelectCountry = (selection)=>{
    console.log("haha", selection.country.countryName)
    setSelectedCountry(selection.country.countryName)
    setDisplayDrop(false)
  }
  return (
    <div style={{
        width : '200px', 
        left : '40%', 
        top: '20%', 
        position: 'absolute', 
        borderColor: 'black',
        border : 'solid'}}>
        <span style={{borderColor: 'black', borderBottom : 'solid'}}
          onClick={toggle}>
              <p style={{display : "inline"}}>{selectedCountry}</p>
              <img style = {{height :  '20px', float : 'right'}}src={drop}/>
        </span>
      {displayDrop && 
        <div>
          <SearchBar value={searchValue} handleOnChange={handleOnChange}/>
          <DropdownList countries={countries} onSelectCountry={onSelectCountry}/>
          {displayViewMore && 
            <p onClick={handleViewMoreClick}>{moreToView} more</p>
          }
          {displayAddButton &&
            <div> 
              <button onClick={addCountry}>Add and Select</button>
              <p>{searchValue} not found</p>
            </div>
          }
        </div>
      }
    </div>
  );
}

export default App
