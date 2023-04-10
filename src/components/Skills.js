import './Skills.css'
import { InlineIcon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import reactIcon from '@iconify/icons-logos/react';
import pythonIcon from '@iconify/icons-logos/python';
import flaskIcon from '@iconify/icons-logos/flask';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import javaIcon from '@iconify/icons-logos/java';
import springIcon from '@iconify/icons-logos/spring';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import gitIcon from '@iconify/icons-logos/git';
import expressIcon from '@iconify/icons-logos/express';
import phpIcon from '@iconify/icons-logos/php'
import cIcon from '@iconify/icons-logos/c'

const Skills=()=>{

    return(
        <section id="skills-section">
            <div id="basic-info">
                <p>As a Full-Stack enthusiast, I have worked with many different technologies both Front-End and Back-End. I really enjoy working with JavaScript, CSS3 and Java</p>
                
            </div>
            <div id="skills-div">
                <div id="front-end">              
                    <p className='diff-skills'>Front End</p>
                    <div className='inner-cont'>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={javascriptIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            <a className='language-link' href="https://www.javascript.com/" target="_blank">JavaScript</a>
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={html5}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            HTML5
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={css3}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            CSS3
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={reactIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            React
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={phpIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            PHP
                        </span>
                    </div>
                </div>
                <div id="back-end">
                    <p className='diff-skills'>Back End</p>
                    <div className='inner-cont'>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={pythonIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            Python
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={flaskIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            Flask
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={nodejsIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            Node.js
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={expressIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            Express.js
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={cIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            C++
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={javaIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            Java
                        </span>
                    </div>
                </div>
                <div id="misc">
                    <p className='diff-skills'>Miscellaneous</p>
                    <div className='inner-cont'>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={mongodbIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            MongoDB
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={gitIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            Git
                        </span>
                        <span className='tech-name'>
                            <InlineIcon
                                icon={postgresqlIcon}
                                height={20}
                                width={20}
                                className='icons'
                            />
                            PostgreSQL
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills