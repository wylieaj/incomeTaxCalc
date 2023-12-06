import { formatter } from "../../utils/incomeCalculatorHelper";

const IncomeField = ({ salary, updateSalary }) => {
  return (
    <section id="IncomeField" className="flex flex-col">
      <div className="mx-auto border border-none bg-slate-200 rounded-lg px-32 py-16 shadow-xl">
        <p>
          <label htmlFor="currSalary" className="block mb-4 font-header text-3xl font-semibold uppercase text-primary">
            Annual Salary
          </label>
          <input type="number" name="currSalary" id="currSalary" value={salary.currSalary} onChange={updateSalary} />
        </p>
      </div>
    </section>
  );
};

export default IncomeField;
