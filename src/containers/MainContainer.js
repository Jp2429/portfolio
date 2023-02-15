import Header from "../components/Header"
import DisplayProjects from "../components/DisplayProjects"
import React,{useState} from "react"
import styled from "styled-components"
import project1Image from '../images/project1.png'

const MainSection = styled.section`
    /* background-color:rgb(42, 113, 236); */
    border:3px solid black;
    /* border-radius:15px; */
    /* margin-left:20px;
    margin-right:20px; */
`
const HeaderDiv=styled.div`
    background-color:rgb(42, 113, 236);
    height:100%;
    padding:15px;
    /* border-top-right-radius:12px;
    border-top-left-radius:12px; */
`
const DisplayDiv=styled.div`
    background-color:white;
    border-top:2px solid black;
    padding:15px;
`
const SomeDiv=styled.div`
    background-color:white;
    border-top:2px solid black;
    padding:20px;
    border-bottom-right-radius:12px;
    border-bottom-left-radius:12px;
    /* border-radius:15px; */
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
            image:'../images/project1.jpeg'
        },
        {
            id:1,
            name:"Pokemon Personal Project",
            typeOfProject:"Solo",
            completionTime:"Ongoing",
            isFinished:false,
            url:"https://github.com/Jp2429/pokemon-personal-project.git",
            image:{project1Image}
        }

    ])


    return (
        <MainSection>
            <HeaderDiv>
                <Header/>
                {/* <hr></hr> */}
            </HeaderDiv>
            <DisplayDiv>
                <h1>Projects</h1>
                {/* <img src={project1Image} /> */}
                <DisplayProjects projectList={projectList}/>
            </DisplayDiv>
            <SomeDiv>
                <h1>Placeholder</h1>
                
            </SomeDiv>
        </MainSection>
    )
}
export default MainContainer