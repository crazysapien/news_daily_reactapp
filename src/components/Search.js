import React from 'react'
import { Link } from 'react-router-dom';

function Search(props) {

    return (
      <form className={`w-9/12 ml-72 mt-4 `}>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input className={`appearance-none rounded-full border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ${!props.mode===true?'bg-lt-body':'bg-dk-body'} ${!props.mode===true?'text-lt-txt1':'text-dk-txt1'}` } type="text" value={props.value} onChange={(event)=>{props.setvalue(event.target.value)}} placeholder="Search news..." aria-label="Full name"/>
        <Link to={`/${props.value}`} className={`flex-shrink-0 cursor-pointer ${!props.mode===true?'bg-lt-link':'bg-dk-link'}  text-sm py-1 px-2 rounded`}  >
          Search
        </Link>
      </div>
    </form>
    )
}

export default Search
