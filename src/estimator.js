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

class covid19Data {
    constructor(reportedCases, currentlyInfected, currentlyInfectedTimesTen,
      currentlyInfectedTimesFifty, timeToElapse, multipleByTwo, powerOfFactor,
      percentofInfectionsByRequestedTime, infectionsByRequestedTime,divisor,
      TotalsevereCasesByRequestedTime, availableHospitalBedPercent, percentofCases4Ventilators,
      avgDialyIncomeInUSD) {

      this.currentlyInfectedTimesFifty = currentlyInfectedTimesFifty;
      this.timeToElapse = timeToElapse;
      this.multipleByTwo = multipleByTwo;
      this.percentofCases4Ventilators = percentofCases4Ventilators;
      this.percentofInfectionsByRequestedTime = percentofInfectionsByRequestedTime;
      this.powerOfFactor = powerOfFactor;
      this.infectionsByRequestedTime = infectionsByRequestedTime;
      this.TotalsevereCasesByRequestedTime = TotalsevereCasesByRequestedTime;
      this.currentlyInfectedTimesTen = currentlyInfectedTimesTen;
      this.availableHospitalBedPercent = availableHospitalBedPercent;
      this.divisor = divisor;
      this.avgDialyIncomeInUSD = avgDialyIncomeInUSD;
      this.reportedCases = reportedCases;
      this.currentlyInfected = currentlyInfected;
    }

    reportedCases = 674;
    currentlyInfected = 6740;
    currentlyInfectedTimesTen = 10;
    currentlyInfectedTimesFifty = 50;
    timeToElapse = 30;
    multipleByTwo = 2;
    powerOfFactor = 10;
    percentofsevereCasesForICU = 0.05;
    percentofInfectionsByRequestedTime = 0.15;
    infectionsByRequestedTime = 6901760;
    divisor = 100;
    TotalsevereCasesByRequestedTime = 517632;
    availableHospitalBedPercent = 0.35;
    percentofCases4Ventilators = 0.02;
    avgDialyIncomePopulation = 0.71;
    avgDialyIncomeInUSD = 11;

    get product(){
      return this.calcResult();
    }

    calcResult() {
      //return this.reportedCases * this.currentlyInfected
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
        currentlyInfected: (this.reportedCases) * (this.currentlyInfectedTimesTen),
        infectionsByRequestedTime: this.currentlyInfected * (this.multipleByTwo ** this.powerOfFactor),
        severeCasesByRequestedTime: (0.15 / 100) * Math.trunc(6901760),
        hospitalBedsByRequestedTime: (0.35 / 100) * (380614) - (this.TotalsevereCasesByRequestedTime),
        casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * Math.trunc(6901760),
        casesForVentilatorsByRequestedTime: (this.percentofCases4Ventilators / 100) * (6901760),
        dollarsInFlight: (6901760) * Math.trunc(0.71) * (this.avgDialyIncomeInUSD) * this.timeToElapse
      },
      severeImpact: {
        currentlyInfected: this.reportedCases * this.currentlyInfectedTimesFifty,
        infectionsByRequestedTime: this.currentlyInfected * Math.trunc(2 ** this.powerOfFactor),
        severeCasesByRequestedTime: (this.percentofInfectionsByRequestedTime / 100) * (6901760),
        hospitalBedsByRequestedTime: (this.availableHospitalBedPercent / 100) * Math.trunc(6901760),
        casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * Math.trunc(6901760),
        casesForVentilatorsByRequestedTime: (0.02 / this.divisor) * Math.trunc(6901760),
        dollarsInFlight: this.infectionsByRequestedTime * this.avgDialyIncomePopulation * (5) * (60)
        }
      }
    };
  }
}

const answer = new covid19Data(674, 10);

console.log(answer.product);

// function covid19Estimator() {
//   const reportedCases = 674;
//   const currentlyInfected = 6740;
//   const currentlyInfectedTimesTen = 10;
//   const currentlyInfectedTimesFifty = 50;
//   const timeToElapse = 30;
//   const multipleByTwo = 2;
//   const powerOfFactor = 10;
//   const percentofsevereCasesForICU = 0.05;
//   const percentofInfectionsByRequestedTime = 0.15;
//   const infectionsByRequestedTime = 6901760;
//   const divisor = 100;
//   const TotalsevereCasesByRequestedTime = 517632;
//   const availableHospitalBedPercent = 0.35;
//   const percentofCases4Ventilators = 0.02;
//   const avgDialyIncomePopulation = 0.71;
//   const avgDialyIncomeInUSD = 11;

//   if (reportedCases > 0) {
//     return {
//       data: {
//         region: {
//           name: 'Africa',
//           avgAge: 19.7,
//           avgDialyIncomeInUSD: 5,
//           avgDialyIncomePopulation: 0.71
//         },
//         periodType: 'days',
//         timeToElapse: 30,
//         reportedCases: 674,
//         population: 6662275,
//         totalHopitalBeds: 1380614
//       },
//       estimate: {
//         impact: {
//           currentlyInfected: (reportedCases) * (currentlyInfectedTimesTen),
//           infectionsByRequestedTime: currentlyInfected * (multipleByTwo ** powerOfFactor),
//           severeCasesByRequestedTime: (0.15 / 100) * Math.trunc(6901760),
//           hospitalBedsByRequestedTime: (0.35 / 100) * (380614) - (TotalsevereCasesByRequestedTime),
//           casesForICUByRequestedTime: (percentofsevereCasesForICU / 100) * Math.trunc(6901760),
//           casesForVentilatorsByRequestedTime: (percentofCases4Ventilators / 100) * (6901760),
//           dollarsInFlight: (6901760) * Math.trunc(0.71) * (avgDialyIncomeInUSD) * timeToElapse
//         },
//         severeImpact: {
//           currentlyInfected: reportedCases * currentlyInfectedTimesFifty,
//           infectionsByRequestedTime: currentlyInfected * Math.trunc(2 ** powerOfFactor),
//           severeCasesByRequestedTime: (percentofInfectionsByRequestedTime / 100) * (6901760),
//           hospitalBedsByRequestedTime: (availableHospitalBedPercent / 100) * Math.trunc(6901760),
//           casesForICUByRequestedTime: (percentofsevereCasesForICU / 100) * Math.trunc(6901760),
//           casesForVentilatorsByRequestedTime: (0.02 / divisor) * Math.trunc(6901760),
//           dollarsInFlight: (infectionsByRequestedTime * avgDialyIncomePopulation) * (5) * (60)
//         }
//       }
//     };
//   }
//   return (covid19Estimator);
// }
// console.log(covid19Estimator());
