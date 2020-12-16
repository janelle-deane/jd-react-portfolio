import './Projects.css';
import React from 'react'

export default function Project1(props) {
    return (
            <div className="card row">
                <div className="col-md-12 img-container">
                  <h2>{props.name}</h2>
                   <div className="row">
                    <img alt={props.name} src={props.image} />
                    </div>
                </div>
                <div className=" col-md-12 content ">
                    <div className="row">
                        <strong>Project Name: </strong> {"  "+props.name}
                    </div>
                    <div className="row">
                        <strong>Description: </strong> {props.description}
                    </div>
                    <div className="row">
                        <strong>Technologies: </strong> {props.tech}
                    </div>
                    <div className="row">
                        <strong>GitHub Link: </strong> {props.github}
                    </div>
                    <div className="row">
                        <strong>Deployed Link: </strong> {props.deployed}
                    </div>
                </div>
            </div>
       
    )
}
