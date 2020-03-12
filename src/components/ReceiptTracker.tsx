import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ReceiptTrackerEntry, Receipt } from "./Receipt";
export const categories = ["Food", "Houseware", "Entertainment"];

export const ReceiptTracker: React.FC = () => {
  const [list, setList] = useState<ReceiptTrackerEntry[]>([]);

  const getTotal = (): number => {
    let sum = 0;
    list.forEach(({ entries }) =>
      entries.forEach(entry => (sum += entry.price))
    );
    return sum;
  };

  const getReceipts = (): JSX.Element[] => {
    return list.map((entry, index) => (
      <Receipt receipt={entry} onChange={updateReceipt} key={index}></Receipt>
    ));
  };

  const addReceipt = (): void => {
    setList([...list, { activeCategory: categories[0], entries: [] }]);
  };

  const updateReceipt = (oldValue, value): void => {
    setList(list.map(entry => (entry === oldValue ? value : oldValue)));
  };

  return (
    <Card>
      <Card.Body className="receipt-list">{getReceipts()}</Card.Body>
      <Card.Footer className="flex-row-between">
        <div className="flex-row-between" style={{ flex: 1 }}>
          <span>Total</span>
          <span>{getTotal()}</span>
        </div>
        <Button size="sm" onClick={addReceipt}>
          Receipt
        </Button>
      </Card.Footer>
    </Card>
  );
};
