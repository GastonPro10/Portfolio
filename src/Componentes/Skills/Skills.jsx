import React from "react";
import "./Skills.scss"

export default function Skills(){
    return(
        <div className="container" id="skills">
            <div className="title">
                <span>HABILIDADES</span>
                <h1>Habilidades</h1>
            </div>
{/*                 <div className="habilidad">
                <h1>Full Stack Web Developer</h1>
                <p>En mi cursada de Soy Henry bootcamp<br/> adquiri habilidades de desarollo web, con <br/>la cual desarrolle varios proyectos</p>
            </div> */}
            <div className="skills">
                <div className="icon">
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="Git"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt='html'/>
                </div>
            </div>
        </div>
    )
}