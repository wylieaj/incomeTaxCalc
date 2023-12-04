import { incomeCalculationHelper, formatter } from "../../utils/incomeCalculatorHelper";

const Results = ({ salary }) => {
  const results = incomeCalculationHelper(salary.currSalary);
  return (
    <>
      {salary.currSalary <= 0 ? (
        <h1 className="center">Please enter a salary amount.</h1>
      ) : (
        <table id="result">
          <thead>
            <tr>
              <td>
                <div></div>
              </td>
              <td>Gross Salary</td>
              <td>Take Home</td>
              <td>Income Tax</td>
              <td>National Insurance</td>
            </tr>
          </thead>
          <tbody>
            {results.reverse().map((result, i) => {
              return (
                <tr key={i}>
                  <td className="tableHeader">{result.period}</td>
                  <td>{formatter.format(result.gross)}</td>
                  <td className="takeHome">{formatter.format(result.takeHome)}</td>
                  <td>{formatter.format(result.incomeTax)}</td>
                  <td>{formatter.format(result.ni)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Results;
