import { calculatePersonalAllowance, calculateIncomeTax, calculateEmployeeNationalInsurance } from "@saving-tool/hmrc-income-tax";

const incomeCalculationHelper = (grossIncome) => {
  const data = [];

  const taxableAnnualIncome = grossIncome;
  const personalAllowance = calculatePersonalAllowance({ taxableAnnualIncome });

  const incomeTax = calculateIncomeTax({ personalAllowance, taxableAnnualIncome });
  const { basicRateTax, higherRateTax, additionalRateTax } = incomeTax;
  const yearlyIncomeTax = basicRateTax + higherRateTax + additionalRateTax;

  const yearlyNI = calculateEmployeeNationalInsurance({ taxableAnnualIncome });

  const yearlyTakeHome = parseInt(taxableAnnualIncome - yearlyIncomeTax - yearlyNI);

  data.push({
    period: "Daily",
    gross: taxableAnnualIncome / 260,
    takeHome: yearlyTakeHome / 260,
    incomeTax: yearlyIncomeTax / 260,
    ni: yearlyNI / 260,
  });
  data.push({
    period: "Weekly",
    gross: taxableAnnualIncome / 52,
    takeHome: yearlyTakeHome / 52,
    incomeTax: yearlyIncomeTax / 52,
    ni: yearlyNI / 52,
  });
  data.push({
    period: "Monthly",
    gross: taxableAnnualIncome / 12,
    takeHome: yearlyTakeHome / 12,
    incomeTax: yearlyIncomeTax / 12,
    ni: yearlyNI / 12,
  });
  data.push({
    period: "Yearly",
    gross: taxableAnnualIncome,
    takeHome: yearlyTakeHome,
    incomeTax: yearlyIncomeTax,
    ni: yearlyNI,
  });

  return data;
};

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export { incomeCalculationHelper, formatter };
