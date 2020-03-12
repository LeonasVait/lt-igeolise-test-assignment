import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export interface ReceiptEntry {
  name: string;
  price: number;
}

interface Props {
  entry: ReceiptEntry;
  onChange: (ReceiptEntry) => ReceiptEntry;
}

export const ReceiptItem: React.FC<Props> = ({ entry, onChange }) => {
  return (
    <div className="flex-row-between">
      <InputGroup size="sm" style={{ flex: 3 }}>
        <FormControl
          onChange={event => {
            onChange({ ...entry, name: event.target.value });
          }}
        />
      </InputGroup>
      <InputGroup size="sm" style={{ flex: 1 }}>
        <FormControl
          type="number"
          onChange={event => {
            onChange({
              ...entry,
              price:
                event.target.value === "" ? 0 : parseFloat(event.target.value)
            });
          }}
        />
        <InputGroup.Append>
          <InputGroup.Text>&#8364;</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};
