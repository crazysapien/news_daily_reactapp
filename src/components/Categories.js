import React from 'react'
import { Link } from 'react-router-dom'

function Categories(props) {
    return (
        <>
            <div className={`flex flex-col h-9/12 top-28 py-10 w-60 ${!props.mode === true ? 'bg-lt-element' : 'bg-dk-element'} fixed z-1 left-0 overflow-hidden shadow-md text-gray-800 rounded-r-3xl`}>
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <div href="/" className={`flex items-center p-2 space-x-3 ${!props.mode === true ? 'text-lt-txt2' : 'text-dk-txt2'}`}>
                                    <span className='text-2xl uppercase'>Categories</span>
                                </div>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/" className={`flex items-center text-xl p-2 space-x-3 rounded-md ${!props.mode === true ? 'text-lt-txt1' : 'text-dk-link'} `}>
                                    general
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/business" className={`flex items-center text-xl p-2 space-x-3 rounded-md ${!props.mode === true ? 'text-lt-txt1' : 'text-dk-link'} `}>
                                    Business
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/entertainment" className={`flex items-center text-xl p-2 space-x-3 rounded-md ${!props.mode === true ? 'text-lt-txt1' : 'text-dk-link'} `}>
                                    Entertainment
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/health" className={`flex items-center text-xl p-2 space-x-3 rounded-md ${!props.mode === true ? 'text-lt-txt1' : 'text-dk-link'} `}>
                                    Health
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/sports" className={`flex items-center text-xl p-2 space-x-3 rounded-md ${!props.mode === true ? 'text-lt-txt1' : 'text-dk-link'} `}>
                                    Sports
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/technology" className={`flex items-center text-xl p-2 space-x-3 rounded-md ${!props.mode === true ? 'text-lt-txt1' : 'text-dk-link'} `}>
                                    technology
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/science" className={`flex items-center text-xl p-2 space-x-3 rounded-md ${!props.mode === true ? 'text-lt-txt1' : 'text-dk-link'} `}>
                                    science
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
