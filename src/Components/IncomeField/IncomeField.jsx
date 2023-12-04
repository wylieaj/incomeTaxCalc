import { formatter } from "../../utils/incomeCalculatorHelper";

const IncomeField = ({ salary, updateSalary }) => {
  return (
    <section id="IncomeField">
      <div className="userInput">
        <p>
          <label htmlFor="currSalary">Annual Salary</label>
          <input type="number" name="currSalary" id="currSalary" value={salary.currSalary} onChange={updateSalary} />
        </p>
      </div>
    </section>
  );
};

export default IncomeField;
