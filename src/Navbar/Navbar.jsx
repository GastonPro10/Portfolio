import React, { useEffect, useState } from "react";
import './Navbar.scss';
import { AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import {HiMenuAlt4, HiX} from "react-icons/hi"
import {  motion } from "framer-motion";

export default function Navbar() {
    const [toggle,setToggle] = useState(false)
    const [scroll,setScroll] = useState(false)

    const menuVariants = {
        hidden: {
            scale:0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration:0.3,
            }
        }
    };
    const navLinkVariants= {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay:0.3,
            }
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll',() => {
            setScroll(window.scrollY > 20)
        })
    }, [])
    return(
        <div className={scroll ? "header active" : "header"}>
            <div className="Nav_container">
                <div className="logo">
                    <h3>gA</h3>
                </div>
                <ul className="nav_links">
                    <li>
                        <a href={`#home`}>Home</a>
                    </li>
                    <li>
                        <a href={`#about`}>About</a>
                    </li>
                    <li>
                        <a href={`#portfolio`}>Proyectos</a>
                    </li>
                    <li>
                        <a href={`#skills`}>Skills</a>
                    </li>
{/*                     <li>
                        <a href={`#contact`}>Contacto</a>
                    </li> */}
                </ul>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/gaston-nicolas-abaca-861a48249/"><AiFillGithub/></a>
                    <a href="https://github.com/GastonPro10"><AiFillLinkedin/></a>
                    
                </div>
                <div className="menu">
                    <HiMenuAlt4 onClick={() => {
                        setToggle(true)
                    }}/>
                </div>
                <motion.div className="closeMenu" 
                    variants={menuVariants} 
                    initial="hidden" 
                    animate={toggle? "visible" : "hidden"}>
                </motion.div>
                <motion.div className="menuX"
                 variants={navLinkVariants}
                 animate={toggle? 'visible' : 'hidden'}                
                >
                    <HiX onClick={() => {
                        setToggle(false)
                    }}/>
                    <li onClick={() => {setToggle(false)}}>
                        <a href={`#home`}>Home</a>
                    </li>
                    <li onClick={() => {setToggle(false)}}>
                        <a href={`#about`}>About</a>
                    </li>
                    <li onClick={() => {setToggle(false)}}>
                        <a href={`#portfolio`}>Proyectos</a>
                    </li>
                    <li onClick={() => {setToggle(false)}}>
                        <a href={`#skills`}>Skills</a>
                    </li>
{/*                     <li onClick={() => {setToggle(false)}}>
                        <a href={`#contact`}>Contacto</a>
                    </li> */}
                </motion.div>
            </div>
        </div>
    )
}