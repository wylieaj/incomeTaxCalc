import { useState } from "react";
import Header from "./Components/Header/Header";
import IncomeField from "./Components/IncomeField/IncomeField";
import Results from "./Components/Results/Results";

function App() {
  const [salary, setSalary] = useState({ currSalary: "" });

  const updateSalary = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;
    setSalary((prevSalary) => {
      return { ...salary, [field]: value };
    });
  };
  return (
    <>
      <Header />
      <IncomeField salary={salary} updateSalary={updateSalary} />
      <Results salary={salary} />
    </>
  );
}

export default App;
