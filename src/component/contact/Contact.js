import React from 'react'
import Form from './Form'

const Contact = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h1>Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit corrupti cum nam! Obcaecati maiores sequi veritatis quae in, rem temporibus.</p>
                    </div>
                    <div className="col-6">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact