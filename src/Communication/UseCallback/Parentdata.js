import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Parentdata = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(30000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>incrementAge</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  );
};

export default Parentdata;
