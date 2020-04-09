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

function currentEstimateByDays() {
  const currentInfections = 6740;
  const days = 5;

  return currentInfections * days;
}
console.log(currentEstimateByDays());

function currentlyInfected() {
  const reportedCases = 674;
  const currentlyInfectedPatients = 10;

  return reportedCases * currentlyInfectedPatients;
}
console.log(currentlyInfected());

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

function infectionsByRequestedTime() {
  const currentlyInfectedPersons = 6740;
  const doubledays = 512;

  return currentlyInfectedPersons * doubledays;
}
console.log(infectionsByRequestedTime());

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
