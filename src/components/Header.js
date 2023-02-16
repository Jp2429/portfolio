import styled from "styled-components"
import './Header.css'

const HeaderOne=styled.h1`
    text-align:center;
`

const Header =()=>{
    return(
        <div>
            <HeaderOne id="main-header">John Panton</HeaderOne>
            <h2 id="second-header">Junior Software Developer</h2>
            <p id="p-line"></p>
        </div>
    )
}

export default Header