import styled from "styled-components"

const ProjectDisplayUl=styled.ul`
    /* border:2px solid black;
    border-radius:15px; */
    /* background-color:white; */
    list-style:none;
    display:grid;
    grid-template-columns:auto auto;
    grid-template-rows:auto auto;
    grid-gap:20px;
    justify-content:center;
`
const ProjectDisplayLi=styled.li`
    border:2px solid black;
    border-radius:15px;
    padding:20px;
    margin:10px;
    &:hover{
        background-color:whitesmoke;
    }
    
`
const GitHubLink=styled.a`
    background-color:black;
`

const DisplayProject=({projectList})=>{
    const listOfProjectNodes=projectList.map((project)=>{
        return (
            <ProjectDisplayLi key={project.id}>
                <p>Name: {project.name}</p>
                <p>Status: {project.isFinished ?"Completed":"Work in Progress"}</p>
                <a href={project.url}> View on GitHub</a>
            </ProjectDisplayLi>
        )
    })


    return(
        <ProjectDisplayUl>
            {listOfProjectNodes}
        </ProjectDisplayUl>
    )
}
export default DisplayProject