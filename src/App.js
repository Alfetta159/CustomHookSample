import { Container, Row, Col, Alert, Button } from 'reactstrap';

function App() {
    function testFunction(value) {
    switch (value) {
      case 0: break;
      case 1: break;
      case 2: break;
      case 3: break;
      case 4: break;
      case 5: break;
      case 6: break;
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Custom Hooks Demo</h1>
        </Col>
      </Row>
      <Row>
        <Col><Alert color='info'>Application is ready</Alert></Col></Row>
      <Row>
        <Col><Button color='info' onClick={() => testFunction(0)}>Info</Button></Col>
        <Col><Button color='success' onClick={() => testFunction(1)}>Sucess</Button></Col>
        <Col><Button color='warning' onClick={() => testFunction(2)}>Warning</Button></Col>
        <Col><Button color='danger' onClick={() => testFunction(3)}>Error</Button></Col>
        <Col><Button color='light' onClick={() => testFunction(4)}>Hint</Button></Col>
        <Col><Button color='dark' onClick={() => testFunction(5)}>N/A</Button></Col>
        <Col><Button color='secondary' onClick={() => testFunction(6)}>Working</Button></Col>
      </Row>
    </Container >
  );
}

export default App;
