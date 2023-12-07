import { useState } from "react";
import Header from "./Components/Header/Header";
import IncomeField from "./Components/IncomeField/IncomeField";
import Results from "./Components/Results/Results";

function App() {
  const [salary, setSalary] = useState({ currSalary: "" });

  const salaryOnChange = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;
    setSalary((prevSalary) => {
      return { ...salary, [field]: value };
    });
  };
  return (
    <>
      <Header />
      <IncomeField salary={salary} salaryOnChange={salaryOnChange} />
    </>
  );
}

export default App;
