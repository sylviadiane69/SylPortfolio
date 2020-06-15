import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 5 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Sylvia's Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Hi! You have arrived to the portfolio of Sylvia Ramirez-Soto. San Antonio, Texas  is my home and base of
              operations. I graduated from the University at Texas of San Antonio with a BA in History in 1992. A majority of my
              work history has been spent in customer service. Primarily, in the cosmetic industry. I've been apart of some
              great companies that I have helped launch to be successful in major retailers, such as Nordstrom and Neiman Marcus.
              A couple of those brands are Maison Francis Kurkdijian and Beauty Bio.
            </p>
            <p>
              I do enjoy working in the cosmeitc industry. I mean, what person doesn't love being able to get paid to
              play with makeup. I feel the experience I have harnessed in the beauty industry will help in a new carreer I'm
              aspiring to, full stack web developer. Currently, I am enrolled in a coding bootcamp at my alma mater, UTSA. This
              page will highlight what I have learned and some of the projects I have done. It is a change from my current occupation,
              that of a Cosmetic Freelance Consultant. This new opportunity is my plan for the future. As Gloria Steinem states,
              "Without leaps of imagination or dreaming, we lose the excitement of possibilities. Dreaming, after all is a form
              of planning."
            </p>
          </Col>
        </Row>
      </Container>
      <Hero backgroundImage="./images/workout.png">
      </Hero>
    </div>
  );
}

export default About;
