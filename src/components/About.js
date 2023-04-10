import './About.css'
import personalImage from '../images/Image.jpeg'
import personalImage1 from '../images/Image[1].jpeg'
import personalImage2 from '../images/Image[2].jpeg'
import personalImage3 from '../images/Image[3].jpeg'

const About=()=>{

    return(
        <div id="about-info-div">
            <div id="about-image">
                <img id='personal-image' src={personalImage}/>
            </div>
            <div id="about-information">
                <h2>My name is John</h2>
                <p>I am a Junior Software Developer having just graduated from CodeClan</p>
                <p>I have a deep passion for programming. With an eagerness to learn and work within the tech industry, I am constantly testing and playing with new technologies to improve myself as a developer.</p>
            </div>
        </div>
    )
}
export default About