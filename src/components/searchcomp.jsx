import React from 'react'
import { LuSearch } from "react-icons/lu";
const Searchcomp = () => {
    const Search = (e)=>{
e.preventDefault()
    }
  return (
    <form className="form-search" onSubmit={Search}>
      <div className="search-div">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button" onClick={Search}>
          <LuSearch />
        </button>
      </div>
    </form>
  );
}

export default Searchcomp