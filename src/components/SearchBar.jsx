import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Search your next read here!</span>
  </div>
  <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-lg w-full max-w-xs" />
 
</label>
    </div>
  )
}

export default SearchBar
