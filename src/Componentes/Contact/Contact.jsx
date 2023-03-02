import React from "react";
import './Contact.scss'

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <span className="redes">
                <p><b>Contacto:</b> <a href="mailto:gaston.abaca11@gmail.com">gaston.abaca11@gmail.com</a></p>
                <p><b>Linkedin:</b> <a href="https://www.linkedin.com/in/gaston-nicolas-abaca-861a48249/">Gaston Abaca</a></p>
            </span>
            <span className="redes">
                <p className="name">AbacaGaston</p>
            </span>
        </div>
    )
}