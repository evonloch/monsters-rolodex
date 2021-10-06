import React from 'react'
import './search-box.styles.css'

function SearchBox({ placeholder, handleCHange}) {
    return (
        <input 
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleCHange}
      />
    )
}

export default SearchBox
