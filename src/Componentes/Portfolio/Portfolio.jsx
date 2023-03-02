import React from "react";
import "./Portfolio.scss";
import oasis from "./oasis.png"
import countries from "./countries.png"
import {FiGithub, FiEye} from "react-icons/fi"
import {motion} from 'framer-motion'

export default function Portfolio(){
    return(
        <div className="container" id="portfolio">
            <div className="title">
                <span>Proyectos</span>
                <h1>Mis Proyectos</h1>
            </div>
            <div className="imagesProyect">
                <div className="contenproyect">
                    <img className='imagePro' src={oasis} alt="Oasis"/>
                        <motion.div className="hoverLayer" initial={{opacity: 0}} whileHover={{opacity: [0, 1]}} transition={{duration:0.3, ease: 'easeInOut'}}>
                            <motion.a href="https://github.com/Dota43ver/OasisLibrary"  whileInView={{scale: [0,1]}} whileHover={{scale: [1, 1.1]}} transition={{duration: 0.3}}>
                                <FiGithub/> 
                            </motion.a>
                            <motion.a href="https://oasis-library.vercel.app/"  whileInView={{scale: [0,1]}} whileHover={{scale: [1, 1.1]}} transition={{duration: 0.3}}>
                                <FiEye/>
                            </motion.a>
                        </motion.div>
                </div>
                <div className="contenproyect">
                    <img className="imagePro" src={countries} alt="countries"/>
                        <motion.div className="hoverLayer" initial={{opacity: 0}} whileHover={{opacity: [0, 1]}} transition={{duration:0.3, ease: 'easeInOut'}}>
                            <motion.a href="https://github.com/GastonPro10/PI-Countries-main" whileInView={{scale: [0, 1]}} whileHover={{scale: [1, 1.1]}} transition={{duration: 0.3}}>
                                <FiGithub/> 
                            </motion.a>
                            <motion.a href="https://www.youtube.com/watch?v=X6S-HJJgxWw&feature=youtu.be&ab_channel=GastonAbaca" whileInView={{scale: [0,1]}} whileHover={{scale: [1, 1.1]}} transition={{duration: 0.3}}>
                                <FiEye/>
                            </motion.a>
                        </motion.div>
                </div>
            </div>
        </div>
    )
}