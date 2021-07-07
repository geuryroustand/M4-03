import React from "react";
import { Alert } from "react-bootstrap";

const WarningSign = ({ text }) => {
  return (
    <Alert variant="danger">
      <p>{text}</p>
    </Alert>
  );
};

export default WarningSign;
