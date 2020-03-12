import React from "react";
import { Card, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { ReceiptItem } from "./ReceiptItem";
import { useState } from "react";

export interface ReceiptEntry {
  name: string;
  price: number;
}

const categories = ["Food", "Houseware", "Entertainment"];

export const Receipt: React.FC = () => {
  const [list, setList] = useState<ReceiptEntry[]>([]);
  const [category, setCategory] = useState<string>(categories[0]);

  const addItem = (): void => {
    list.push({ name: "", price: 0 });
    setList([...list]);
  };

  const getReceiptItems = (): React.FC => {
    return list.map((entry, index) => (
      <ReceiptItem
        entry={entry}
        onChange={value => updateEntry(entry, value)}
        key={index}
      ></ReceiptItem>
    ));
  };

  const updateEntry = (oldValue, value): void => {
    setList(list.map(entry => (entry === oldValue ? value : entry)));
  };

  const getCategoryOptions = (): React.FC => {
    return categories.map((entry, index) => (
      <Dropdown.Item key={index} onClick={() => setCategory(entry)}>
        {entry}
      </Dropdown.Item>
    ));
  };

  const getTotal = (): number => {
    let sum = 0;
    list.forEach(entry => {
      sum += entry.price;
    });
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
