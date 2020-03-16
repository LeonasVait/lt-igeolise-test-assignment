import React from "react";
import { Card, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { ReceiptItem, ReceiptEntry } from "./ReceiptItem";
import { useState } from "react";

export interface ReceiptTrackerEntry {
  activeCategory: string;
  entries: ReceiptEntry[];
}
interface Props {
  receipt: ReceiptTrackerEntry;
  onChange: (value: ReceiptTrackerEntry) => void;
}

const categories = ["Food", "Houseware", "Entertainment"];

export const Receipt: React.FC<Props> = ({ receipt, onChange }) => {
  const [category, setCategory] = useState<string>(categories[0]);

  const addItem = (): void => {
    onChange({
      ...receipt,
      entries: [...receipt.entries, { name: "", price: 0 }]
    });
  };

  const getReceiptItems = (): JSX.Element[] => {
    return receipt.entries.map((entry, index) => (
      <ReceiptItem
        entry={entry}
        onChange={value => updateItem(index, value)}
        key={index}
      ></ReceiptItem>
    ));
  };

  const updateItem = (indexChanged: number, value: ReceiptEntry): void => {
    onChange({
      ...receipt,
      entries: receipt.entries.map((entry, index) =>
        index === indexChanged ? value : entry
      )
    });
  };

  const getCategoryOptions = (): JSX.Element[] => {
    return categories.map((entry, index) => (
      <Dropdown.Item key={index} onClick={() => setCategory(entry)}>
        {entry}
      </Dropdown.Item>
    ));
  };

  const getTotal = (): number => {
    let sum = 0;
    receipt.entries.forEach(({ price }) => (sum += price));
    return sum;
  };

  return (
    <Card className="receipt">
      <div className="flex-row-between">
        <DropdownButton
          id="dropdown-basic-button"
          title={category}
          size="sm"
          variant="secondary"
        >
          {getCategoryOptions()}
        </DropdownButton>

        <Button size="sm" onClick={addItem}>
          Add expense
        </Button>
      </div>
      {getReceiptItems()}
      <div className="flex-row-between">
        <span>Total</span> <span>{getTotal()} &#8364;</span>
      </div>
    </Card>
  );
};
