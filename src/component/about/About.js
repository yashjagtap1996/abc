import React, { useContext } from 'react'
import { sender } from '../../Store'
import Heading from '../Heading'

const About = () => {

    let { mode, setMode } = useContext(sender)

    let obj = [
        {
            id: 1,
            title: "A",
            name: "a",
            colour:"success"
        },
        {
            id: 2,
            title: "B",
            name: "b",
            colour:"danger"
        },
        {
            id: 3,
            title: "C",
            name: "c",
            colour:"warning"
        },
        {
            id: 4,
            title: "D",
            name: "d",
            colour:"primary"
        },

    ]

    return (
        <>
            <div className={`container-fluid bg-${mode ? "dark" : "light"}`} id='about'>
                <Heading title="About Me" data="Know Me More" />
                <div className={`row text-${mode ? "light" : "dark"}`}>
                    <div className="col-8">
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae id molestiae eius veritatis eum quas magnam. Aliquam autem non, illo ducimus inventore praesentium, recusandae placeat labore nobis error eligendi voluptas modi asperiores consequatur?</p>
                    </div>
                    <div className="col-4">
                        <h1>22 years</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        obj.map((e) => {
                            return (
                                <div className="col-3" key={e.id}>
                                    <div className={`card bg-${e.colour} mb-3`}>
                                        <div className="card-header">{e.title}</div>
                                        <div className="card-body">
                                            <p className="card-text">{e.name}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default About