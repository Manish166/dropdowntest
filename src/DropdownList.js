import React from 'react'
const DropdownList = ({listItems, onSelect}) =>{
    const items = listItems.map((item)=>{
        return(
            <li key={item.id} onClick={()=>onSelect({item})}>
                {item.name}
            </li>
        )
    })
    return(
        <div>
            <ul style={{textAlign : 'start', 
                listStyle : 'none', 
                paddingLeft : '10px',
                paddingRight : '10px'}}>
                {items}
            </ul>
        </div>
        
    )
}

export default DropdownList