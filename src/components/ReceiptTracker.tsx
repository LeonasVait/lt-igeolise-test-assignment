import React from "react";
import { Card } from "react-bootstrap";
import { Receipt } from "./Receipt";

export const ReceiptTracker: React.FC = () => {
  return (
    <Card>
      <Card.Body>
        <Receipt></Receipt>
        <Receipt></Receipt>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
};
