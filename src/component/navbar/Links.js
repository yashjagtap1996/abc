import React, { useContext } from 'react'
import { sender } from '../../Store'

const Links = (props) => {

    let {mode,setMode}=useContext(sender)

  return (
    <>
        <li className="nav-item">
            <a  className={`nav-link text-${mode?"light":"dark"}`} href={props.link}>{props.name}</a>
        </li>
    </>
  )
}

export default Links