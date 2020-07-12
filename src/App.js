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
  const country = {"countryId" : 0, "countryName" : ""}
  
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
    country.countryId=data.countries.length +1
    country.countryName=searchValue[0].toUpperCase() + searchValue.slice(1)
    data.countries.push(country)
    setSelectedCountry(country.countryName)
    setDisplayDrop(false)
  }

  const onSelectCountry = ({country})=>{
    setSelectedCountry(country.countryName)
    setDisplayDrop(false)
  }
  return (
    <div>
    <div style={{
        fontSize : '12px',
        width : '200px', 
        left : '40%', 
        top: '20%', 
        position: 'absolute', 
        border : '1px solid black'}}>
        <span style={{borderColor: 'black'}} onClick={toggle}>
            <p style={{display : "inline"}}>
              {selectedCountry}
            </p>
            <img style = {{height :  '20px', float : 'right'}}src={drop}/>
        </span>
      {displayDrop && 
        <div style={{paddingTop : '10px'}}>
          <SearchBar value={searchValue} handleOnChange={handleOnChange}/>
          <DropdownList countries={countries} onSelectCountry={onSelectCountry}/>
          {displayViewMore && 
            <p style={{float : 'right'}} onClick={handleViewMoreClick}>
              {moreToView} more
            </p>
          }
          {displayAddButton &&
            <span> 
              <p style={{display : 'inline'}}>{searchValue} not found</p>
              <button onClick={addCountry}
                style={{borderWidth : '1px', background : 'transparent', float : 'right', borderRadius : '3px'}}>
                Add and Select
              </button>
            </span>
          }
        </div>
      }
    </div>
    </div>
  );
}

export default App
