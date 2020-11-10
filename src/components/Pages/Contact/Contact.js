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
                    <h3>I would love to hear about your dream or project you would like to bring to reality!</h3>
                        <br />
                        <h3>You can reach out to me directly at my email:<a href="mailto:janelle.m.deane@gmail.com"> Janelle Deane</a> </h3>
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
