import React, { useContext } from 'react'
import { AppContext } from '../Context/context'

const Search = () => {
  const { searchQuery, setSearchQuery, errorAPI } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  return (
    <div className='flex items-center justify-center my-6'>
      <div>
        <label htmlFor="searchMovie" className='text-center w-full inline-block mb-2 capitalize'>Search your favourite movie</label>
        <input type="search" id='searchMovie' className="w-full px-4 py-2 text-gray-800 rounded-full focus:outline-none"
          value={searchQuery} onChange={(e) => { handleSearch(e) }} />
        <p className='errorMsg text-center mt-2'>{errorAPI}</p>
      </div>
    </div >
  )
}

export default Search
