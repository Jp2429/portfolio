import styled from "styled-components"
import "./DisplayProjects.css"

const ProjectDisplayUl=styled.ul`
    list-style:none;
`
const ProjectDisplayLi=styled.li`
`
const GitHubLinkDiv=styled.div`
`
const DivOnHover=styled.div`
`
const GitHubLink=styled.a`
    color:white;
    text-decoration:none;
    &:hover{
        color:red;
        transition:0.3s ease
    }
`


const DisplayProject=({projectList})=>{
    const listOfProjectNodes=projectList.map((project)=>{
        return (
            <ProjectDisplayLi key={project.id} id="project">
                    <DivOnHover id="image-div" >
                        <img id="background-img" src={process.env.PUBLIC_URL + "/" + project.imageName}/>
                        <div id="overlay">
                            <p id="project-details">testing displayblock</p>
                        </div>
                    </DivOnHover>
                    <div id="tech-div">
                        <p id="project-title">{project.name}</p>
                        <p>{project.typeOfProject} Project</p>
                        <p>{project.isFinished ? "Completed within "+project.completionTime+" Days":"Work in Progress"}</p>                       
                    </div>
                    <GitHubLinkDiv id="project-link">
                        <GitHubLink href={project.url}> View on GitHub</GitHubLink>
                    </GitHubLinkDiv>
            </ProjectDisplayLi>
        )
    })


    return(
        <ProjectDisplayUl id="project-container">
            {listOfProjectNodes}
        </ProjectDisplayUl>
    )
}
export default DisplayProject