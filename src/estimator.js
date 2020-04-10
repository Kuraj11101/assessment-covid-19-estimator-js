const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};
console.log(covid19ImpactEstimator());

function covid19Data() {
  return {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDialyIncomeInUSD: 5,
      avgDialyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 6662275,
    totalHopitalBeds: 1380614
  };
}
console.log(covid19Data());

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
  const percentofCasesForVentilators = 0.02;
  const avgDialyIncomePopulation = 0.71;
  const avgDialyIncomeInUSD = 5;

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
        currentlyInfected: reportedCases * currentlyInfectedTimesTen,
        infectionsByRequestedTime: currentlyInfected * (multipleByTwo ** powerOfFactor),
        severeCasesByRequestedTime: (percentofInfectionsByRequestedTime / divisor) * (6901760),
        hospitalBedsByRequestedTime: (0.35 / 100) * (1380614) - TotalsevereCasesByRequestedTime,
        casesForICUByRequestedTime: (percentofsevereCasesForICU / 100) * infectionsByRequestedTime,
        casesForVentilatorsByRequestedTime: (percentofCasesForVentilators / 100) * 6901760,
        dollarsInFlight: (infectionsByRequestedTime * 0.71) * avgDialyIncomeInUSD * timeToElapse
      },
      severeImpact: {
        currentlyInfected: reportedCases * currentlyInfectedTimesFifty,
        infectionsByRequestedTime: currentlyInfected * (2 ** powerOfFactor),
        severeCasesByRequestedTime: (percentofInfectionsByRequestedTime / 100) * (6901760),
        hospitalBedsByRequestedTime: (availableHospitalBedPercent / 100) * 6901760,
        casesForICUByRequestedTime: (percentofsevereCasesForICU / 100) * 6901760,
        casesForVentilatorsByRequestedTime: (0.02 / divisor) * infectionsByRequestedTime,
        dollarsInFlight: (infectionsByRequestedTime * avgDialyIncomePopulation) * 5 * 60
      }
    }
  };
}
console.log(covid19Estimator());

function impactcurrentlyInfected() {
  const impactcurrentlyInfectedPatients = 50;
  const reportedCases = 674;

  return reportedCases * impactcurrentlyInfectedPatients;
}
console.log(impactcurrentlyInfected());

function severecurrentlyInfected() {
  const severecurrentlyInfectedPatients = 50;
  const reportedCases = 674;

  return reportedCases * severecurrentlyInfectedPatients;
}
console.log(severecurrentlyInfected());

function ImpactInfectionsByRequestedTime() {
  const InfectionsImpactNumber = 33700;
  const doubledays = 512;

  return InfectionsImpactNumber * doubledays;
}
console.log(ImpactInfectionsByRequestedTime());

function severeinfectionsByRequestedTime() {
  const severeInfectionsNumber = 33700;
  const doubledays = 512;

  return severeInfectionsNumber * doubledays;
}
console.log(severeinfectionsByRequestedTime());

function severeCasesByRequestedTime() {
  const percentofInfectionsByRequestedTime = 0.15;
  const infectionsByRequestedTimeTotal = 3450880;
  const dividedby = 100;

  return (percentofInfectionsByRequestedTime / dividedby) * (infectionsByRequestedTimeTotal);
}
console.log(severeCasesByRequestedTime());

function hospitalBedsByRequestedTime() {
  const TotalsevereCasesByRequestedTime = 517632;
  const totalHopitalBeds = 1380614;
  const availableHospitalBedPercent = 0.35;

  return (availableHospitalBedPercent / 100) * (totalHopitalBeds) - TotalsevereCasesByRequestedTime;
}
console.log(hospitalBedsByRequestedTime());
