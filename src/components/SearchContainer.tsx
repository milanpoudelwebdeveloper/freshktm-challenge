import React from 'react'
import '../styles/SearchContainer.css'

interface props {
  keyword: string
  setKeyword: React.Dispatch<React.SetStateAction<string>>
}

const SearchContainer: React.FC<props> = ({ keyword, setKeyword }) => {
  return (
    <div className="searchContainer">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search cyptocurrency"
      />
    </div>
  )
}

export default SearchContainer
