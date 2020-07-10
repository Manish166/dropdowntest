import React from "react";
import Wrapper from './Wrapper'
import styled from "styled-components";
import SearchBar from './SearchBar'
import DropdownList from './DropdownList'

function App() {
  return (
    <div>
      <button>Select a Location</button>
      <SearchBar/>
      <DropdownList/>
    </div>
    
  );
}

export default App
