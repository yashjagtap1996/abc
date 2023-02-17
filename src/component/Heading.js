import React, { useContext } from 'react'
import { sender } from '../Store'

const Heading = (props) => {

    let {mode,setMode}=useContext(sender)

  return (
    <>
        <p className='text-warning'>{props.title}</p>
        <h1 className={`text-${mode?"light":"dark"}`}>{props.data}</h1>
    </>
  )
}

export default Heading