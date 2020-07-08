import React from "react";
import { Figure } from "react-bootstrap";
import "./style.css"

function About() {

    return (
        
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="./images/Me.jpg"
                />
                
            <p>
                Hi! You have arrived to the portfolio of Sylvia Ramirez-Soto. My home, and my base, are in San Antonio,
                Texas. I graduated from the University of San Antonio at Texas with a BA in History in 1992. A majority of my
                work history has been spent in customer service.Primarily, in the cosmetic industry. I've been apart of
                some great companies that I have helped launch to be successful in major retailers, such as Nordstrom
                and Neiman Marcus. A couple of those brands are Maison FrancisKurkdijian and Beauty Bio.
            </p>
            <p>
                I do enjoy working in the cosmeitc industry. I mean, what person doesn't love being able to get paid to
                play with makeup. I feel the experience I have harnessed in the beauty industry will help in a new carreer
                I'm aspiring to, full stack web developer. Currently, I am enrolled in a coding bootcamp at my alma mater,
                UTSA. This page will highlight what I have learned and some of the projects I have done. It is a change from
                my current job. But as Gloria Steinem states, "Without leaps of imagination or dreaming, we lose the excitement
                of possibilities. Dreaming, after all is a form of planning."
            </p>
            
        </Figure>
    )
}

export default About;

