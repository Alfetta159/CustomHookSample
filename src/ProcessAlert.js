import { faCircleCheck, faCircleDot, faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Container, Row, Col, Alert, Button } from 'reactstrap';

export function ProcessAlert(props) {

  const {
    isOpen,
    condition,
    displayValue
  } = props.type;

  function getColor(condition) {
    switch (condition) {
      case "hide": return "info";
      case "info": return "info";
      case "success": return "success";
      default: return "dark";
    }
  }

  function getIcon(condition) {
    switch (condition) {
      case "hide": return <FontAwesomeIcon icon={faCircleDot} />;
      case "info": return <FontAwesomeIcon icon={faCircleExclamation} />;
      case "success": return <FontAwesomeIcon icon={faCircleCheck} />;
      default: return <FontAwesomeIcon icon={faCircleQuestion} />;
    }
  }

  return (
    <Alert isOpen={isOpen} color={getColor(condition)}>{getIcon(condition)} {displayValue}</Alert>
  );
}

export function useProcessAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState('');
  const [type, setType] = useState('hide');

  function setAlert(isOpen, condition, displayValue) {
    setIsOpen(isOpen);
    setType(condition);
    setDisplayValue(displayValue);
  }

  function getState() {
    return {
      isOpen: isOpen,
      condition: type,
      displayValue: displayValue
    };
  }

  return {
    type: getState(),
    setAlert: setAlert
  }
}