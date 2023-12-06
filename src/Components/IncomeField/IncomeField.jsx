import { formatter } from "../../utils/incomeCalculatorHelper";

const IncomeField = ({ salary, updateSalary }) => {
  return (
    <section id="IncomeField" className="flex flex-col">
      <div className="mx-auto border bg-slate-200 rounded-lg px-16 py-16 shadow-lg">
        <p>
          <label htmlFor="currSalary" className="block mb-6 font-header text-3xl tracking-wider font-semibold uppercase text-primary text-center">
            Annual Salary
          </label>
          <input
            type="number"
            name="currSalary"
            id="currSalary"
            value={salary.currSalary}
            onChange={updateSalary}
            className="text-2xl p-2 rounded-2xl font-header tracking-wider font-semibold text-primary text-center shadow-inner"
          />
        </p>
      </div>
    </section>
  );
};

export default IncomeField;
