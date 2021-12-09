import React from "react";
import { useState } from "react";
import { Counter } from "./counter";

export const CountersList = () => {
  const [counterList, setCounterList] = useState([
    { id: 0, value: 1, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 3, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 5, name: "Набор натуралиста" },
  ]);
  const hendleDelete = (id) => {
    return setCounterList((list) => list.filter((i) => i.id !== id));
  };
  const handleIncrement = (id) => {
    const index = counterList.findIndex((clbk) => clbk.id === id);
    const newCounterList = [...counterList];
    newCounterList[index].value++;
    setCounterList(newCounterList);
  };
  const handleDecrement = (id) => {
    const index = counterList.findIndex((clbk) => clbk.id === id);
    const newCounterList = [...counterList];
    if(newCounterList[index].value > 0){
         newCounterList[index].value--;
    }
 
    setCounterList(newCounterList);
  };

  return (
    <>
      {counterList.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onInc={handleIncrement}
          onDec={handleDecrement}
          onDelete={hendleDelete}
        />
      ))}
    </>
  );
};
