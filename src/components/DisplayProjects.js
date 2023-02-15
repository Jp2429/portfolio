import styled from "styled-components"
import "./DisplayProjects.css"
import project1Image from '../images/project1.png'


const ProjectDisplayUl=styled.ul`
    list-style:none;
    /*display:grid;
    grid-template-columns:auto auto;
    grid-template-rows:auto auto;
    grid-gap:20px;
    justify-content:center; */
`
const ProjectDisplayLi=styled.li`
    /* box-shadow:3px 4px rgba(0, 0, 0, 0.58);
    border:2px solid black;
    border-radius:15px;
    padding:20px;
    margin:10px;
    &:hover{
        background-color:whitesmoke;
    }
    
     */
`
const GitHubLinkDiv=styled.div`
    /* position:absolute;
    width:350px;
    max-width:350px; */
    background-color:black;
    padding:15px;
    /* margin-left:-20px;
    margin-right:-20px;
    margin-bottom:-20px; */
    border-bottom-left-radius:4px;
    border-bottom-right-radius:4px;
    

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
        const sortImage=()=>{
            let projectImage=""
            if(project.id===0){
                let projectImage=project1Image
                return projectImage
            }
            return projectImage
        }
        
        return (
            <ProjectDisplayLi key={project.id} id="project">
                    <DivOnHover id="image-div" >
                        <img id="background-img" src={sortImage()}/>
                        {/* style={{ backgroundImage: `url('/images/${project.image}')` }} */}
                        <div id="overlay">
                            <p >testing displayblock</p>
                            {console.log("/images/",project.image)}
                        </div>
                    </DivOnHover>
                    <div id="test">
                        <p>{project.name}-{project.isFinished ? project.completionTime+" Days":"Work in Progress"}-{project.typeOfProject} Project</p>
                    </div>
                    {/* <p>Status: </p> */}
                    <GitHubLinkDiv>
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