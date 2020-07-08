import React from "react";
import { Card, Button, Figure, Container, Row, Col } from "react-bootstrap";

function Projects() {

  const styles = {

    cardStyle: {
      background: 'light',
      border: '.01rem solid',
      borderColor: 'MediumSeaGreen',
      width: '18rem',
      backgroundColor: 'MintCream'
    },

    containerStyle: {
      border: '.02rem solid',
      borderColor: 'blue',
      
    }

  };

  return (

    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Card style={styles.cardStyle}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="./images/GetFed.png"
              />
            </Figure>

            <Card.Body>
              <Card.Title>GetFed</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
             <Button href="https://github.com/sylviadiane69/GetFed">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 4, offset: 4 }}>
          <Card style={styles.cardStyle}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="./images/VirusVices.png"
              />
            </Figure>

            <Card.Body>
              <Card.Title>VirusVices</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href="https://github.com/sylviadiane69/Virus-Vices">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={2}>
          <Card style={styles.cardStyle}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="./images/generator.png"
              />
            </Figure>

            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href="https://github.com/sylviadiane69/Generator1">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
        <Col>
          <Card style={styles.cardStyle}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="./images/workout.png"
              />
            </Figure>

            <Card.Body>
              <Card.Title>workoutTracker</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href="https://github.com/sylviadiane69/workoutTracker">GitHub</Button><br />
              <Button href="https://desolate-chamber-14802.herokuapp.com/?id=5ecc0345036475001744cd56">workoutTracker</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card style={styles.cardStyle}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="./images/BT3.png"
              />
            </Figure>

            <Card.Body>
              <Card.Title>Budget Tracker</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href="https://github.com/sylviadiane69/TrkBudget">GitHub</Button><br />
              <Button href="https://powerful-mountain-78400.herokuapp.com/">TrkBudget</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card style={styles.cardStyle}>
            <Figure> 
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="./images/Fanpage.png"
              />
            </Figure>

            <Card.Body>
              <Card.Title>Foo Fighter Fanpage</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href="https://github.com/sylviadiane69/sylviadiane69.github.io">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
    </Container>

  )
}

export default Projects;


