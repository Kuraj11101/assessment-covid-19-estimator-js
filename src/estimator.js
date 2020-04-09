const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};
module.exports = covid19ImpactEstimator

var covid19ImpactData = 
{
 region: {
    name: "Africa",
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
module.exports = covid19ImpactData

function currentlyInfected(){

  let reportedCases = 674, 
  currentlyInfectedPatients = 10;
  
  if (reportedCases > 0){ 
    return reportedCases * currentlyInfectedPatients;
  } 
}
console.log(currentlyInfected());

function impactcurrentlyInfected(){

  let impactcurrentlyInfectedPatients = 50,
  reportedCases = 674;

  if (impactcurrentlyInfectedPatients > 0)
  {
    return reportedCases * impactcurrentlyInfectedPatients;  
  } 
}
console.log(impactcurrentlyInfected());

function severecurrentlyInfected(){

  let severecurrentlyInfectedPatients = 50,
  reportedCases = 674;

  if (severecurrentlyInfectedPatients > 0)
  {
    return reportedCases * severecurrentlyInfectedPatients;   
  }
}
console.log(severecurrentlyInfected());

function infectionsByRequestedTime(){

  let currentlyInfectedPersons = 6740,
  doubledays = 512;

  if (currentlyInfectedPersons > 0)
  {
    return currentlyInfectedPersons * doubledays; 
  }
}
console.log(infectionsByRequestedTime());

function ImpactInfectionsByRequestedTime(){

  let InfectionsImpactNumber = 33700,
  doubledays = 512;

  if (InfectionsImpactNumber > 0) 
  {
    return InfectionsImpactNumber * doubledays;
  }
}
console.log(ImpactInfectionsByRequestedTime());

function severeinfectionsByRequestedTime(){

  let severeInfectionsNumber = 33700,
  doubledays = 512;

  if (doubledays > 0) 
  { 
    return severeInfectionsNumber * doubledays;
  }
}
console.log(severeinfectionsByRequestedTime());

function severeCasesByRequestedTime(){

  let percentofInfectionsByRequestedTime = 0.15,
  infectionsByRequestedTimeTotal = 3450880,
  dividedby = 100;

  if (percentofInfectionsByRequestedTime > 0)
  {
    return (percentofInfectionsByRequestedTime / dividedby * infectionsByRequestedTimeTotal);
  }
}
console.log(severeCasesByRequestedTime());

function hospitalBedsBuRequestedTime(){

  let TotalsevereCasesByRequestedTime = 517632,
  totalHopitalBeds = 1380614,
  availableHospitalBedPercentage = 0.35;

  if (TotalsevereCasesByRequestedTime > 0) 
  { 
    return availableHospitalBedPercentage / 100 * totalHopitalBeds - TotalsevereCasesByRequestedTime;
  }
} 
console.log(hospitalBedsBuRequestedTime());