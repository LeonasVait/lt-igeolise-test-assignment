import React from "react";
import { Container } from "react-bootstrap";
import { ReceiptItem } from "./ReceiptItem";

export const Receipt: React.FC = () => {
  return (
    <Container>
      <ReceiptItem></ReceiptItem>
      <ReceiptItem></ReceiptItem>
    </Container>
  );
};
