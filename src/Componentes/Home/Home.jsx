import React from "react";
import './Home.scss'
import { motion } from "framer-motion";

export default function Home(){
    return(
        <div className="container" id="home">
            <div className="profile">
                <img src="https://res.cloudinary.com/dx3wowvsb/image/upload/v1673360375/photo about/1661300533257_ef3fkw.jpg"alt="portfolio-img"/>
            </div>
            <div className="profile_text">
                <h3 className="name"> Hola, soy <span>Abaca Gaston</span></h3>
                <span className="job">
                    Desarrolador Full Stack
                </span>
                <span className="text">
                    Me gusta<br/>
                    desarrollar sitios web<br/>
                    innovadores
                </span>
                <motion.a href="#about" whileHover={{scale: 1.1}} transition={{duration: 0.3}}>VER MÁS</motion.a>
                <div className="web">Desarrolo Web</div>
            </div>

        </div>
    )
}