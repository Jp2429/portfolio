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
                <p>This will be information about me</p>
            </div>
        </div>
    )
}
export default About