const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator (data) = {
  region:{
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
}


function currentlyInfected(persons) {
  persons = (reportedCases * 10)
  return value; 
}
currentlyInfected();

function impactcurrentlyInfected(impact) {
  impact = (reportedCases * 50)
  return value;
}
impactcurrentlyInfected();

function severecurrentlyInfected() {
    servereImpact = (reportedCases * 50)
    return value;
}
severecurrentlyInfected();

function infectionsByRequestedTime() {
    persons = currentlyInfected * (2 ^ 9)
    return value; 
}
infectionsByRequestedTime();

function ImpactInfectionsByRequestedTime() {
    impact = impactcurrentlyInfected * (2 ^ 9)
    return value;
}
ImpactInfectionsByRequestedTime();

function severeinfectionsByRequestedTime() {
    severeImpact = severecurrentlyInfected * (2 ^ 9)
    return value;
}
severeinfectionsByRequestedTime();