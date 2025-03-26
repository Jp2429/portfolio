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
            imageName:'project1.png',
            details:"The project is a web application that allows the owner to manage an inventory for the book store. The user will be able to track the details of the book, the author related to said book, stock count and the markup of the book."
        },
        {
            id:1,
            name:"Pokemon Personal Project",
            typeOfProject:"Solo",
            completionTime:"Ongoing",
            isFinished:false,
            url:"https://github.com/Jp2429/pokemon-personal-project",
            imageName:'personalProject.png',
            details:"This is a personal project that I have been doing in my own time. It is a React app that displays CRUD functionality and uses a pokemon API"
        },
        {
            id:2,
            name:"Marine Life Group Project",
            typeOfProject:"Group",
            completionTime:"7",
            isFinished:true,
            url:"https://github.com/Jp2429/marine_group_project.git",
            imageName:"groupProject.png",
            details:"For this group project at CodeClan, In a team of four, we created a web application aimed at 10-13 year olds in order to teach them about marine life and the dangers they face. The user will be able to read information about marine life and the user should be able to take a quiz about the information they have just read."
        },
        {
            id:3,
            name:"Star Wars: Hunt",
            typeOfProject:"Group",
            completionTime:"14",
            isFinished:true,
            url:"https://github.com/Jp2429/star_wars_hunt",
            imageName:"ProjectGameImage.png",
            details:"This is the capstone project at CodeClan, In a team of two we created a game based in the Star Wars universe. The user will be able to purchase/sell equipment, recruit party members and to go on missions fighting against enemies."
        }

    ])


    return (
        <MainSection id="main-section">
            <div id="BodyDiv">
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
            </div>
            {/* <p id="p-line"></p> */}
        </MainSection>
    )
}
export default MainContainer