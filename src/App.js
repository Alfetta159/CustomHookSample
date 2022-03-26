import { Container, Row, Col, Button } from 'reactstrap';
import { ProcessAlert, useProcessAlert } from './ProcessAlert';

function App() {
  // Get the elements of the custom hook: the setAlert function 
  // and type object which is what our Alert will look like.
  const {
    setAlert,
    type,
  } = useProcessAlert();

  // Here is a function that might make a state change to this component,
  // and we want to show the result in our ProcessAlert.
  function testFunction(value) {
    switch (value) {
      case 0: setAlert(false); break;
      case 1: setAlert(true, 'info', 'Application is ready.'); break;
      case 2: setAlert(true, 'success', 'Damage repaired, Captain.'); break;
    }
  }

  // Here we return the HTML setting the one type property of our ProcessAlert to the type object 
  // we were given when we set up the custom hook here in this component.
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
        </Col>
        </Row>
      <Row>
        <Col><Button color='secondary' onClick={() => testFunction(0)}>Hide</Button></Col>
        <Col><Button color='info' onClick={() => testFunction(1)}>Info</Button></Col>
        <Col><Button color='success' onClick={() => testFunction(2)}>Success</Button></Col>
      </Row>
    </Container >
  );
}

export default App;
