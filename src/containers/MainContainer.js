import Header from "../components/Header"
import DisplayProjects from "../components/DisplayProjects"
import About from '../components/About'
import Skills from "../components/Skills"
import React,{useState} from "react"
import styled from "styled-components"
import './MainContainer.css'

const MainSection = styled.section`
`
const HeaderDiv=styled.div`
`
const DisplayDiv=styled.div`
    padding:20px;
`
const AboutDiv=styled.div`
    padding:20px;
`

const MainContainer=()=>{
    const [projectList,setProjectList]=useState([
        {
            id:0,
            name:"CodeClan Python Project",
            typeOfProject:"Solo",
            completionTime:4,
            isFinished:true,
            url:"https://github.com/Jp2429/project_1.git",
            imageName:'project1.png'
        },
        {
            id:1,
            name:"Pokemon Personal Project",
            typeOfProject:"Solo",
            completionTime:"Ongoing",
            isFinished:false,
            url:"https://github.com/Jp2429/pokemon-personal-project.git",
            imageName:'personalProject.png'
        },
        {
            id:2,
            name:"Marine Life Group Project",
            typeOfProject:"Group",
            completionTime:"7",
            isFinished:true,
            url:"https://github.com/Jp2429/marine_group_project.git",
            imageName:"groupProject.png"
        }

    ])


    return (
        <MainSection id="main-section">
            <HeaderDiv id="header">
                <Header/>
            </HeaderDiv>
            <AboutDiv id="about">
                <h1 id="about-header">About</h1>
                <About/>
                
            </AboutDiv>
            <p id="p-line"></p>
            <div id="skills">
                <h1 id="skills-header">Skills</h1>
                <Skills/>
            </div>
            <p id="p-line"></p>
            <DisplayDiv id="projects">
                <h1 id="project-header">Projects</h1>
                <DisplayProjects projectList={projectList}/>
            </DisplayDiv>
            {/* <p id="p-line"></p> */}
        </MainSection>
    )
}
export default MainContainer