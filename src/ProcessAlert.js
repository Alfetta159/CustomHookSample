import {
  faCircleCheck,
  faCircleDot,
  faCircleExclamation,
  faCircleQuestion,
  faSun,
  faMoon,
  faTriangleCircleSquare,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { Alert, Spinner } from 'reactstrap';

// Here is our component which agregates the icons, the Bootstrap Alert and keeps track
// of what color, icon and text to display.
export function ProcessAlert(props) {
  const {
    isOpen,
    condition,
    displayValue,
    displayValue1,
    displayValue2,
    displayValue3
  } = props.type;

  // Our condition is a very limited set. We are intentionally limiting what the consumer
  // can show to keep this simple and reusable for the majority of cases.
  function getColor() {
    switch (condition) {
      case "hide":
      case "info":
      case "working":
        return "info";
      case "success": return "success";
      case "warning": return "warning";
      case "error": return "danger";
      case "hint": return "light";
      case "notavailable":return "dark";
      default: return "secondary";
    }
  }

  // Likewise with our corresponding icons...
  function getIcon() {
    switch (condition) {
      case "hide": return <FontAwesomeIcon color={getColor()} icon={faCircleDot} />;
      case "info": return <FontAwesomeIcon color={getColor()} icon={faCircleExclamation} />;
      case "success": return <FontAwesomeIcon color={getColor()} icon={faCircleCheck} />
      case "warning": return <FontAwesomeIcon color={getColor()} icon={faTriangleCircleSquare} />
      case "error": return <FontAwesomeIcon color={getColor()} icon={faTriangleExclamation} />
      case "hint": return <FontAwesomeIcon color={getColor()} icon={faSun} />
      case "working": return <Spinner color='info' size='sm' />
      case "notavailable":return <FontAwesomeIcon color={getColor()} icon={faMoon} />
      default: return <FontAwesomeIcon icon={faCircleQuestion} />;
    }
  }

  // Here we return the Alert with our limited number of configuration properties.
  return (
    <Alert color={getColor()} isOpen={isOpen}>
      {getIcon()} {displayValue}
      {displayValue1 ? <Fragment> <br />{displayValue1}</Fragment> : null}
      {displayValue2 ? <Fragment> <br />{displayValue2}</Fragment> : null}
      {displayValue3 ? <Fragment> <br />{displayValue3}</Fragment> : null}
    </Alert>);
}

// And here is our custom hook. 
export function useProcessAlert() {
  // Notice the states are here and not in the ProcessAlert component?
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState('');
  const [displayValue1, setDisplayValue1] = useState(undefined);
  const [displayValue2, setDisplayValue2] = useState(undefined);
  const [displayValue3, setDisplayValue3] = useState(undefined);
  const [type, setType] = useState('hide');

  // And we furnish a convient function to set the ProcessAlert to 
  // one of the few states that we have created for it.
  function setAlert(isOpen, condition, displayValue, displayValue1, displayValue2, displayValue3) {
    setIsOpen(isOpen);
    setType(condition);
    setDisplayValue(displayValue);
    setDisplayValue1(displayValue1);
    setDisplayValue2(displayValue2);
    setDisplayValue3(displayValue3);
  }

  // Likewise, we furnish a function to create the various states as one object
  // so it can be passed to the ProcessAlert component as one property which
  // we don't care about (i.e. black box)
  function getState() {
    return {
      isOpen: isOpen,
      condition: type,
      displayValue: displayValue,
      displayValue1: displayValue1,
      displayValue2: displayValue2,
      displayValue3: displayValue3
    };
  }

  // Here is where we simply return our configuration or type and the function to set
  // the alert type.
  return {
    type: getState(),
    setAlert: setAlert
  }
}