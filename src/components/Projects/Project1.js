import './Projects.css';
import React from 'react'

export default function Project1() {
    return (
        <div className="projects">
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                <div className="content">
                    <strong>Project Name:</strong> {props.name}
                    <strong>Description:</strong> {props.description}
                    <strong>GitHub Link:</strong> {props.github}
                    <strong>Deployed Link:</strong> {props.deployed}
                </div>
            </div>
        </div>
    )
}
