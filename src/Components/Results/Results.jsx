import { incomeCalculationHelper, formatter } from "../../utils/incomeCalculatorHelper";

const Results = ({ salary }) => {
  const results = incomeCalculationHelper(salary.currSalary);
  return (
    <div className="flex flex-col my-20">
      {salary.currSalary <= 0 ? (
        <div className="mx-auto font-header  text-primary">
          <h2 className="text-2xl uppercase text-center mb-2">Please enter a salary amount</h2>
        </div>
      ) : (
        <table id="result" className="table mx-auto font-header text-primary mb-10">
          <thead className="table-header-group font-semibold">
            <tr className="text-2xl text-right table-row">
              <td className="pl-5">
                <div></div>
              </td>
              <td className="pl-5">Gross Salary</td>
              <td className="pl-5">Take Home</td>
              <td className="pl-5">Income Tax</td>
              <td className="pl-5">National Insurance</td>
            </tr>
          </thead>
          <tbody>
            {results.reverse().map((result, i) => {
              if (result.period === "Monthly") {
                return (
                  <tr key={i} className="text-right text-xl text-primary font-semibold">
                    <td className="text-2xl">{result.period}</td>
                    <td className="">{formatter.format(result.gross)}</td>
                    <td className="text-green-600">{formatter.format(result.takeHome)}</td>
                    <td className="text-red-500">{formatter.format(result.incomeTax)}</td>
                    <td className="text-red-500">{formatter.format(result.ni)}</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={i} className="text-right text-lg text-primary">
                    <td className="text-lg">{result.period}</td>
                    <td className="">{formatter.format(result.gross)}</td>
                    <td className="text-green-600">{formatter.format(result.takeHome)}</td>
                    <td className="text-red-500">{formatter.format(result.incomeTax)}</td>
                    <td className="text-red-500">{formatter.format(result.ni)}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
      <p className="text-center text-slate-600">
        Disclaimer: Information provided on this site is for illustrative purposes only. <br />
        Do not make any major financial decisions without consulting a qualified specialist.
      </p>
    </div>
  );
};

export default Results;
