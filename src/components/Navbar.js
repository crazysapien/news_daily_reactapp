import React from 'react'
import dark_logo from '../assets/dark_logo.png'
import light_logo from '../assets/light_logo.png'

function Navbar(props) {

    return (
        <>
        <nav className={`sticky top-0 z-50 w-full flex flex-wrap items-center justify-between py-3 ${!props.mode===true?'bg-lt-element':'bg-dk-element'} shadow-md`}>
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-10">
                <div className="container-fluid">
                    <a className={`text-3xl font-mono ${!props.mode===true?'text-lt-txt1':'text-dk-link'}`} href="/">Daily</a>
                </div>
                <div className='container-fluid w-6 h-6' onClick={props.toggleMode}>
                {props.mode===true?
                <img src={light_logo} alt="" />:
                <img src={dark_logo} alt="" />
                }
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
