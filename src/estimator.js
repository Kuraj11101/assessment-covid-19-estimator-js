const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};
module.exports = covid19ImpactEstimator;

const covid19Data = (data) => {
  const region = data; 
  return {
    data: region,
    name: 'Africa',
    avgAge: 19.7,
    avgDialyIncomeInUSD: 5,
    avgDialyIncomePopulation: 0.71,
  // }, 
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 6662275,
    totalHopitalBeds: 1380614
 };
};

var reportedCases = 674, 
  currentlyInfectedPatients = 10;

function currentlyInfected() {
  return reportedCases * currentlyInfectedPatients;
}
console.log(currentlyInfected());

var reportedCases = 674,
  impactcurrentlyInfectedPatients = 50;

function impactcurrentlyInfected() {
  return reportedCases * impactcurrentlyInfectedPatients;   
}
console.log(impactcurrentlyInfected());

var reportedCases = 674,
  severecurrentlyInfectedPatients = 50;

function severecurrentlyInfected() {
  return reportedCases * severecurrentlyInfectedPatients;   
}
console.log(severecurrentlyInfected());

var currentlyInfected = 6740,
  doubledays = 2,
  operand = 9;

function infectionsByRequestedTime(persons) {
  return currentlyInfected * doubledays ^ operand; 
}
console.log(infectionsByRequestedTime());

var InfectionsImpactNumber = 33700,
  doubledays = 2,
  operand = 9;

function ImpactInfectionsByRequestedTime() {
  return InfectionsImpactNumber * doubledays ^ operand;
}
console.log(ImpactInfectionsByRequestedTime());

var severeInfectionsNumber = 33700,
  doubledays = 2,
  operand = 9;

function severeinfectionsByRequestedTime() {
  return severeInfectionsNumber * doubledays ^ operand;
}
console.log(severeinfectionsByRequestedTime());