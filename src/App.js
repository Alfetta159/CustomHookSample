import { Container, Row, Col, Alert, Button } from 'reactstrap';
import { ProcessAlert } from './ProcessAlert';

function App() {
    function testFunction(value) {
    switch (value) {
      case 0: break;
      case 1: break;
      case 2: break;
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
        <Col>
        <ProcessAlert isOpen={true} condition='info' displayValue="Situation normal. How are things with you?"/>
        </Col></Row>
      <Row>
      <Col><Button color='secondary' onClick={() => testFunction(2)}>Hide</Button></Col>
      <Col><Button color='info' onClick={() => testFunction(0)}>Info</Button></Col>
        <Col><Button color='success' onClick={() => testFunction(1)}>Success</Button></Col>
      </Row>
    </Container >
  );
}

export default App;
