import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'


function Alertbox() {
    const [show, setShow] = useState(true);
    return (
    <>
    <Container fluid className="d-flex">
        <Col>
        <Alert show={show} variant="danger">
            <Alert.Heading>Hello World</Alert.Heading>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.</p>

          <div className="d-flex justify-content-end">
                <Button variant="outline-success" onClick={() => setShow(false)}>Close</Button>
          </div>
        </Alert>
        </Col>
        <Col>
        
        </Col>
       <Col>
       {!show && <Button variant="outine-success" onClick={() => setShow(true)}>Show Alert</Button>}
       </Col>
       <Col>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click Me
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                        <Card.Body>hello llllsldls v</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click Me
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                        <Card.Body>hello llllsldls v</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
       </Col>
        
        </Container>
        <div>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="danger">Danger</Badge>
  <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>
  <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
</div>
        </>
    )
}

export default Alertbox
