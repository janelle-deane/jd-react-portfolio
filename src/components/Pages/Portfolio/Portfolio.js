import './Portfolio.css';
import React, { Component } from 'react';
import Project1 from '../../Projects/Project1';
import {Spring} from 'react-spring';
import projects from '../../Projects/projects.json'

export default class Portfolio extends Component {
    state={
        projects
    }
    
    render() {
        return (
            <div className="projects">
                
                {this.state.projects.map(project => (<Project1
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                tech={project.tech}     
                github={project.github}
                deployed={project.deployed} 
                />
                ))}
            </div>


            
        )
    }
}
