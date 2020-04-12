const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};
module.exports = {
  covid19ImpactEstimator
};

function covid19Estimator() {
  const reportedCases = 674;
  const currentlyInfected = 6740;
  const currentlyInfectedTimesTen = 10;
  const currentlyInfectedTimesFifty = 50;
  const timeToElapse = 30;
  const multipleByTwo = 2;
  const powerOfFactor = 10;
  const percentofsevereCasesForICU = 0.05;
  const percentofInfectionsByRequestedTime = 0.15;
  const infectionsByRequestedTime = 6901760;
  const divisor = 100;
  const TotalsevereCasesByRequestedTime = 517632;
  const availableHospitalBedPercent = 0.35;
  const percentofCases4Ventilators = 0.02;
  const avgDialyIncomePopulation = 0.71;
  const avgDialyIncomeInUSD = 11;

  if (reportedCases > 0) {
    return {
      data: {
        region: {
          name: 'Africa',
          avgAge: 19.7,
          avgDialyIncomeInUSD: 5,
          avgDialyIncomePopulation: 0.71
        },
        periodType: 'days',
        timeToElapse: 30,
        reportedCases: 674,
        population: 6662275,
        totalHopitalBeds: 1380614
      },
      estimate: {
        impact: {
          currentlyInfected: (reportedCases) * (currentlyInfectedTimesTen),
          infectionsByRequestedTime: currentlyInfected * (multipleByTwo ** powerOfFactor),
          severeCasesByRequestedTime: (0.15 / 100) * Math.trunc(6901760),
          hospitalBedsByRequestedTime: (0.35 / 100) * Math.trunc(380614) - (TotalsevereCasesByRequestedTime),
          casesForICUByRequestedTime: (percentofsevereCasesForICU / 100) * Math.trunc(6901760),
          casesForVentilatorsByRequestedTime: (percentofCases4Ventilators / 100) * Math.trunc(6901760),
          dollarsInFlight: (6901760) * Math.trunc(0.71) * (avgDialyIncomeInUSD) * timeToElapse
        },
        severeImpact: {
          currentlyInfected: reportedCases * currentlyInfectedTimesFifty,
          infectionsByRequestedTime: currentlyInfected * Math.trunc(2 ** powerOfFactor),
          severeCasesByRequestedTime: (percentofInfectionsByRequestedTime / 100) * Math.trunc(6901760),
          hospitalBedsByRequestedTime: (availableHospitalBedPercent / 100) * Math.trunc(6901760),
          casesForICUByRequestedTime: (percentofsevereCasesForICU / 100) * Math.trunc(6901760),
          casesForVentilatorsByRequestedTime: (0.02 / divisor) * Math.trunc(6901760),
          dollarsInFlight: (infectionsByRequestedTime * avgDialyIncomePopulation) * (5) * (60)
        }
      }
    };
  }
  return (covid19Estimator);
}
console.log(covid19Estimator());
