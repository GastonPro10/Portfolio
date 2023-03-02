import React from "react";
import './About.scss'
import { AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai";
import { motion } from "framer-motion";

export default function About(){
    return(
        <div className="container" id="about">
            <div className="title">
                <span>SOBRE MI</span>
                <h1>Sobre Mí</h1>
            </div>
            <div className="about_container">
                <div className="about_left">
                    <img src="https://res.cloudinary.com/dx3wowvsb/image/upload/v1673360375/photo about/1661300533257_ef3fkw.jpg"alt="portfolio-img"></img>
                </div>
                <div className="about_right">
                    <p>
                        Soy un desarrollador front-end de Argentina.<br/>
                        Estoy interesado en toda la pila de frontend, pero también tengo conocimiento de backend. Estoy dispuesto a enfrentar nuevos retos y a seguir aprendiendo tecnologías
                    </p>
                    <div className="bio">
                        <span> <AiFillGithub/>Github</span>
                        <span><AiFillLinkedin/>Linkedin</span>
                        <span><AiFillMail/>gaston.abaca11@gmail.com</span>
                    </div>
                    <motion.a href="#" download="" whileHover={{scale: 1.1}} transition={{duration: 0.3}}>
                        Descargar Cv
                    </motion.a>
                </div>
            
            </div>
            <h1 className="TextSize">SOBRE MI</h1>
        </div>
    )
}
