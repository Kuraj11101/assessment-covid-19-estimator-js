const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};
module.exports = covid19ImpactEstimator;

const covid19ImpactData = (data) => {
const region = data; 
  return {
    data: region,
    name: 'Africa',
    avgAge: 19.7,
    avgDialyIncomeInUSD: 5,
    avgDialyIncomePopulation: 0.71, 
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 6662275,
    totalHopitalBeds: 1380614
  };
};
module.exports = covid19ImpactData;

let reportedCases = 674, 
  currentlyInfectedPatients = 10;

if (reportedCases > 0) 

function currentlyInfected(){
  return reportedCases * currentlyInfectedPatients;
}
console.log(currentlyInfected());

let impactcurrentlyInfectedPatients = 50;

if (currentlyInfectedPatients > 0)

function impactcurrentlyInfected(){
  return reportedCases * impactcurrentlyInfectedPatients;   
}
console.log(impactcurrentlyInfected());

let severecurrentlyInfectedPatients = 50;

if (severecurrentlyInfectedPatients > 0)

function severecurrentlyInfected(){
  return reportedCases * severecurrentlyInfectedPatients;   
}
console.log(severecurrentlyInfected());

let currentlyInfectedPersons = 6740,
 doubledays = 512;

if (currentlyInfectedPersons > 0) 

function infectionsByRequestedTime() {
  return currentlyInfectedPersons * doubledays; 
}
console.log(infectionsByRequestedTime());

let InfectionsImpactNumber = 33700;

if (InfectionsImpactNumber > 0) 

function ImpactInfectionsByRequestedTime(){
  return InfectionsImpactNumber * doubledays;
}
console.log(ImpactInfectionsByRequestedTime());

let severeInfectionsNumber = 33700;

if (doubledays > 0) 
function severeinfectionsByRequestedTime() {
  return severeInfectionsNumber * doubledays;
}
console.log(severeinfectionsByRequestedTime());

let percentofInfectionsByRequestedTime = 0.15,
  infectionsByRequestedTimeTotal = 3450880,
  dividedby = 100;

if (percentofInfectionsByRequestedTime > 0)
function severeCasesByRequestedTime() {
  return (percentofInfectionsByRequestedTime / dividedby * infectionsByRequestedTimeTotal);
}
console.log(severeCasesByRequestedTime());