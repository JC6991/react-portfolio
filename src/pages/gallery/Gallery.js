import * as React from 'react';
import projects from "../../projects.json";
import ProjectCard from '../../components/projectCard/projectCard';

function Gallery() {
    
    return (
        <>
            <h1>Project Gallery</h1>

            {projects.map((project) => {
              <ProjectCard
                id={project.id}
                key={project.id}
                title={project.title}
                url={project.url}
                gitHubUrl={project.gitHubUrl}
                imgUrl={project.imgUrl}
             /> 
            })}                   
        </>
    )
};

export default Gallery;