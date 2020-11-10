import './Contact.css';
import React from 'react'
import Janelle from "../../assets/mthood.jpg"

export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <header>
                        <h2>Contact</h2>
                        <hr />
                    </header>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>If you would prefer to reach out to me directly, please email me at:<a href="mailto:janelle.m.deane@gmail.com"> Janelle Deane</a> </h2>
                        <br />
                    </div>
                    <div className="col-md-6">
                        <div className="pull-right"><img src={Janelle} alt="Janelle Picture" className="contact-pic" /></div>
                        <div />
                    </div>
                </div>
                
            </div>
            </div>
    )
}
