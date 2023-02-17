import React, { useContext } from 'react'
import { sender } from '../../Store'
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import Links from './Links';
import { FcPortraitMode } from "react-icons/fc";

const Navbar = () => {

    let {mode,setMode}=useContext(sender)

    return (
        <>
            <nav className={`fixed-top navbar navbar-expand-lg bg-${mode?"dark":"light"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand p-0" style={{fontSize:'35px'}} href="#"><FcPortraitMode /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <Links name="Home" link="#home" />
                            <Links name="About" link="#about" />
                            <Links name="Skills" />
                            <Links name="Contact" />
                        </ul>
                        <div className="d-flex" role="search">
                            <button onClick={()=>setMode(!mode)} className={`border-0 bg-${mode?"dark":"light"}`}>{mode?<BsFillSunFill className='text-warning fs-4' /> :<BsFillMoonFill className='fs-4' />}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar