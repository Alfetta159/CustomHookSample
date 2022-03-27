import { Container, Row, Col, Button } from 'reactstrap';
import { ProcessAlert, useProcessAlert } from './ProcessAlert';

function App() {
  // Get the elements of the custom hook: the setAlert function 
  // and type object which is what our Alert will look like.
  const {
    setAlert,
    type,
  } = useProcessAlert();

  function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  // Here is a function that might make a state change to this component,
  // and we want to show the result in our ProcessAlert.
  function testFunction(value) {
  if(value!==0){
      setAlert(true, "working", "We're doing something which requires you to wait until complete...");
  }
    sleep(2000).then(() => {
      switch (value) {
        case 0: setAlert(false); break;
        case 1: setAlert(true, 'info', 'Application is ready.'); break;
        case 200: setAlert(true, 'success', 'Damage repaired, Captain.','Warp power has been restored.'); break;
        case 404: setAlert(true, 'warning', 'No user was found.'); break;
        case 500: setAlert(true, 'error', 'This application is not working.','CRM System is down.'); break;
        case 400: setAlert(true, 'hint', 'Try something different:','1: Either a different way.','2: Or press the button harder.'); break;
        case 403: setAlert(true, 'notavailable', "You're not authorized to use this application.",'Please contact the help desk.'); break;
      }
    })
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
        <Col><Button color='success' onClick={() => testFunction(200)}>Success</Button></Col>
        <Col><Button color='warning' onClick={() => testFunction(404)}>Warning</Button></Col>
        <Col><Button color='danger' onClick={() => testFunction(500)}>Error</Button></Col>
        <Col><Button color='light' onClick={() => testFunction(400)}>Hint</Button></Col>
        <Col><Button color='dark' onClick={() => testFunction(403)}>N/A</Button></Col>
      </Row>
    </Container >
  );
}

export default App;
