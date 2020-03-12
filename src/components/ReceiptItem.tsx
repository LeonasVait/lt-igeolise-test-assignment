import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export const ReceiptItem: React.FC = () => {
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <FormControl />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <FormControl />
      </InputGroup>
    </>
  );
};
