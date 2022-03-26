import { Container, Row, Col, Button } from 'reactstrap';
import { ProcessAlert, useProcessAlert } from './ProcessAlert';

function App() {
  const {
    setAlert,
    type,
  } = useProcessAlert();

  function testFunction(value) {
    switch (value) {
      case 0: setAlert(false); break;
      case 1: setAlert(true, 'info', 'Application is ready.'); break;
      case 2: setAlert(true, 'success', 'Damage repaired, Captain.'); break;
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
          <ProcessAlert type={type} />
        </Col></Row>
      <Row>
        <Col><Button color='secondary' onClick={() => testFunction(0)}>Hide</Button></Col>
        <Col><Button color='info' onClick={() => testFunction(1)}>Info</Button></Col>
        <Col><Button color='success' onClick={() => testFunction(2)}>Success</Button></Col>
      </Row>
    </Container >
  );
}

export default App;
