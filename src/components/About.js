import './About.css'
import personalImage from '../images/Image6.jpg'
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
                <h2>Hello I'm John Panton.</h2>
                <p>I'm a passionate and driven Junior Software Developer with a background in software development and a love for problem-solving. My journey into coding began with an HND in Software Development, where I built a strong foundation in languages like Python, Java and PHP. I then refined my skills further at CodeClan, an intensive digital bootcamp, where I worked on hands-on projects using React, JavaScript, Flask and PostgreSQL. My portfolio showcases solo and collaborative projects, including an inventory management app, a marine learning platform and a game inspired by the Star Wars universe. I thrive in both front-end and back-end development and enjoy tackling challenges through analytical thinking. When I’m not coding, I love playing strategy games and exploring history and geography. I’m always eager to learn new technologies and improve my craft—check out my projects and feel free to connect!</p>
            </div>
        </div>
    )
}
export default About