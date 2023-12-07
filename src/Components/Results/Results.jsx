import { incomeCalculationHelper, formatter } from "../../utils/incomeCalculatorHelper";

const Results = ({ salary }) => {
  const results = incomeCalculationHelper(salary.currSalary);
  return (
    <div className="flex flex-col">
      {salary.currSalary <= 0 ? (
        <div className="mx-auto font-header text-primary">
          <h2 className="text-xl text-center">Please enter a salary amount</h2>
        </div>
      ) : (
        <table id="result" className="table mx-auto font-header text-primary">
          <thead className="table-header-group border-b-2 border-black mb-5">
            <tr className="text-xl text-right table-row">
              <td className="pl-5 pb-5">
                <div></div>
              </td>
              <td className="pl-5">Gross Salary</td>
              <td className="pl-5">Take Home</td>
              <td className="pl-5">Income Tax</td>
              <td className="pl-5">National Insurance</td>
            </tr>
          </thead>
          <tbody className="">
            {results.reverse().map((result, i) => {
              if (result.period === "Monthly") {
                return (
                  <tr key={i} className="text-right text-lg text-primary font-semibold">
                    <td className="pt-2">{result.period}</td>
                    <td className=" pt-2">{formatter.format(result.gross)}</td>
                    <td className=" pt-2 text-green-600">{formatter.format(result.takeHome)}</td>
                    <td className=" pt-2 text-red-500">{formatter.format(result.incomeTax)}</td>
                    <td className=" pt-2 text-red-500">{formatter.format(result.ni)}</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={i} className="text-right text-lg text-primary">
                    <td className="pt-2">{result.period}</td>
                    <td className=" pt-2">{formatter.format(result.gross)}</td>
                    <td className=" pt-2">{formatter.format(result.takeHome)}</td>
                    <td className=" pt-2">{formatter.format(result.incomeTax)}</td>
                    <td className=" pt-2">{formatter.format(result.ni)}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
