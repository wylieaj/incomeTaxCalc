import { formatter } from "../../utils/incomeCalculatorHelper";
import Results from "../Results/Results";

const IncomeField = ({ salary, salaryOnChange }) => {
  return (
    <section id="IncomeField" className="flex flex-col">
      <div className="mx-auto border bg-slate-200 text-primary rounded-lg p-12 shadow-lg">
        <div className="flex">
          <p className="mx-auto">
            <label htmlFor="currSalary" className="mb-2 font-header text-lg tracking-wider uppercase text-primary mr-2">
              Annual Salary:
            </label>
            <input
              type="number"
              name="currSalary"
              id="currSalary"
              value={salary.currSalary}
              onChange={salaryOnChange}
              className="text-lg p-1 rounded-2xl font-header tracking-wider text-center shadow-inner mx-auto"
            />
          </p>
        </div>
        <div className="mt-10">
          <Results salary={salary} />
        </div>
      </div>
      <p className="text-center text-slate-600 mt-10">
        Disclaimer: Information provided on this site is for illustrative purposes only. <br />
        Do not make any major financial decisions without consulting a qualified specialist.
      </p>
    </section>
  );
};

export default IncomeField;
