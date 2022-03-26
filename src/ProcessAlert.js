import { faCircleCheck, faCircleDot, faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Alert } from 'reactstrap';

// Here is our component which agregates the icons, the Bootstrap Alert and keeps track
// of what color, icon and text to display.
export function ProcessAlert(props) {
  const {
    isOpen,
    condition,
    displayValue
  } = props.type;

  // Our condition is a very limited set. We are intentionally limiting what the consumer
  // can show to keep this simple and reusable for the majority of cases.
  function getColor(condition) {
    switch (condition) {
      case "hide": return "info";
      case "info": return "info";
      case "success": return "success";
      default: return "dark";
    }
  }

  // Likewise with our corresponding icons...
  function getIcon(condition) {
    switch (condition) {
      case "hide": return <FontAwesomeIcon icon={faCircleDot} />;
      case "info": return <FontAwesomeIcon icon={faCircleExclamation} />;
      case "success": return <FontAwesomeIcon icon={faCircleCheck} />;
      default: return <FontAwesomeIcon icon={faCircleQuestion} />;
    }
  }

  // Here we return the Alert with our limited number of configuration properties.
  return (
    <Alert isOpen={isOpen} color={getColor(condition)}>{getIcon(condition)} {displayValue}</Alert>
  );
}

// And here is our custom hook. 
export function useProcessAlert() {
  // Notice the states are here and not in the ProcessAlert component?
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState('');
  const [type, setType] = useState('hide');

  // And we furnish a convient function to set the ProcessAlert to 
  // one of the few states that we have created for it.
  function setAlert(isOpen, condition, displayValue) {
    setIsOpen(isOpen);
    setType(condition);
    setDisplayValue(displayValue);
  }

  // Likewise, we furnish a function to create the various states as one object
  // so it can be passed to the ProcessAlert component as one property which
  // we don't care about (i.e. black box)
  function getState() {
    return {
      isOpen: isOpen,
      condition: type,
      displayValue: displayValue
    };
  }

  // Here is where we simply return our configuration or type and the function to set
  // the alert type.
  return {
    type: getState(),
    setAlert: setAlert
  }
}