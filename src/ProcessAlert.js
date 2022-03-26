import { faCircleCheck, faCircleDot, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Container, Row, Col, Alert, Button } from 'reactstrap';

export function ProcessAlert(props) {
  const {
    isOpen,
    condition,
    displayValue
  } = props;

  function getColor(condition) {
    switch (condition) {
      case "hide":return "info";
      case "info":return "info";
      case "success":return "success";
    }
  }

  function getIcon(condition) {
    switch (condition) {
      case "hide":return <FontAwesomeIcon icon={faCircleDot}/>;
      case "info":return  <FontAwesomeIcon icon={faCircleExclamation}/>;
      case "success":return  <FontAwesomeIcon icon={faCircleCheck}/>;
    }
  }

  return (
    <Alert isOpen={isOpen} color={getColor(condition)}>{getIcon(condition)} {displayValue}</Alert>
  );
}