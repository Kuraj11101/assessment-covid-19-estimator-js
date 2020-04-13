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

class Covid19ForDaysData {
  constructor(reportedCases, currentlyInfected, currentlyInfectedTimesTen,
    currentlyInfectedTimesFifty, timeToElapse, multipleByTwo, powerOfFactor,
    percentofInfectionsByRequestedTime, infectionsByRequestedTime, divisor,
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

    timeToElapse = 14;

    multipleByTwo = 2;

    powerOfFactor = 10;

    percentofsevereCasesForICU = 0.05;

    percentofInfectionsByRequestedTime = 0.15;

    divisor = 100;

    infectionsByRequestedTime = 6901760;

    TsCByRequestedTime = 517632;

    availableHospitalBedPercent = 0.35;

    Cases4Ventilators = 0.02;

    avgDialyIncomePopulation = 0.71;

    avgDialyIncomeInUSD = 11;

    get product() {
      return this.calcResult();
    }

    calcResult() {
      return {
        data: {
          region: {
            name: 'Africa',
            avgAge: 19.7,
            avgDialyIncomeInUSD: 5,
            avgDialyIncomePopulation: 0.71
          },
          periodType: 'days',
          timeToElapse: 14,
          reportedCases: 674,
          population: 6662275,
          totalHopitalBeds: 1380614
        },
        estimate: {
          impact: {
            currentlyInfected: (this.reportedCases) * (this.currentlyInfectedTimesTen),
            infectionsByRequestedTime: this.currentlyInfected * (2 ** this.powerOfFactor),
            severeCasesByRequestedTime: (0.15 / 100) * (this.infectionsByRequestedTime),
            hospitalBedsByRequestedTime: (0.35 / 100) * (380614) - (this.TsCByRequestedTime),
            casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * 6901760,
            casesForVentilatorsByRequestedTime: (this.Cases4Ventilators / 100) * (6901760),
            dollarsInFlight: (6901760) * (0.71) * (this.avgDialyIncomeInUSD) * this.timeToElapse
          },
          severeImpact: {
            currentlyInfected: this.reportedCases * this.currentlyInfectedTimesFifty,
            infectionsByRequestedTime: this.currentlyInfected * Math.trunc(2 ** this.powerOfFactor),
            severeCasesByRequestedTime: (this.percentofInfectionsByRequestedTime / 100) * (6901760),
            hospitalBedsByRequestedTime: (this.availableHospitalBedPercent / 100) * (6901760),
            casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * (6901760),
            casesForVentilatorsByRequestedTime: (0.02 / this.divisor) * (6901760),
            dollarsInFlight: (6901760) * this.avgDialyIncomePopulation * (5) * (60)
          }
        }
      };
    }
}
const Answer = new Covid19ForDaysData(674, 6740, 10, 50, 14, 2, 2, 0.15, 6901760, 100, 517632,
  0.35, 0.02, 0.71, 11);

console.log(Answer.product);

class Covid19ForWeeksData {
  constructor(reportedCases, currentlyInfected, currentlyInfectedTimesTen,
    currentlyInfectedTimesFifty, timeToElapse, multipleByTwo, powerOfFactor,
    percentofInfectionsByRequestedTime, infectionsByRequestedTime, divisor,
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

    timeToElapse = (7 * 3);

    multipleByTwo = 2;

    powerOfFactor = 10;

    percentofsevereCasesForICU = 0.05;

    percentofInfectionsByRequestedTime = 0.15;

    divisor = 100;

    infectionsByRequestedTime = 6901760;

    TsCByRequestedTime = 517632;

    availableHospitalBedPercent = 0.35;

    Cases4Ventilators = 0.02;

    avgDialyIncomePopulation = 0.71;

    avgDialyIncomeInUSD = 11;

    get product() {
      return this.calcResult();
    }

    calcResult() {
      return {
        data: {
          region: {
            name: 'Africa',
            avgAge: 19.7,
            avgDialyIncomeInUSD: 11,
            avgDialyIncomePopulation: 0.71
          },
          periodType: 'weeks',
          timeToElapse: 21,
          reportedCases: 674,
          population: 6662275,
          totalHopitalBeds: 1380614
        },
        estimate: {
          impact: {
            currentlyInfected: (this.reportedCases) * (this.currentlyInfectedTimesTen),
            infectionsByRequestedTime: this.currentlyInfected * (2 ** this.powerOfFactor),
            severeCasesByRequestedTime: (0.15 / 100) * (this.infectionsByRequestedTime),
            hospitalBedsByRequestedTime: (0.35 / 100) * (380614) - (this.TsCByRequestedTime),
            casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * 6901760,
            casesForVentilatorsByRequestedTime: (this.Cases4Ventilators / 100) * (6901760),
            dollarsInFlight: (6901760) * (0.71) * (this.avgDialyIncomeInUSD) * this.timeToElapse
          },
          severeImpact: {
            currentlyInfected: this.reportedCases * this.currentlyInfectedTimesFifty,
            infectionsByRequestedTime: this.currentlyInfected * Math.trunc(2 ** this.powerOfFactor),
            severeCasesByRequestedTime: (this.percentofInfectionsByRequestedTime / 100) * (6901760),
            hospitalBedsByRequestedTime: (this.availableHospitalBedPercent / 100) * (6901760),
            casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * (6901760),
            casesForVentilatorsByRequestedTime: (0.02 / this.divisor) * (6901760),
            dollarsInFlight: (6901760) * this.avgDialyIncomePopulation * (11) * (60)
          }
        }
      };
    }
}
const results = new Covid19ForWeeksData(674, 6740, 10, 50, 21, 2, 2, 0.15, 6901760, 100, 517632,
  0.35, 0.02, 0.71, 11);

console.log(results.product);

class Covid19ForMonthsData {
  constructor(reportedCases, currentlyInfected, currentlyInfectedTimesTen,
    currentlyInfectedTimesFifty, timeToElapse, multipleByTwo, powerOfFactor,
    percentofInfectionsByRequestedTime, infectionsByRequestedTime, divisor,
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

    timeToElapse = (30 * 3);

    multipleByTwo = 2;

    powerOfFactor = 10;

    percentofsevereCasesForICU = 0.05;

    percentofInfectionsByRequestedTime = 0.15;

    divisor = 100;

    infectionsByRequestedTime = 6901760;

    TsCByRequestedTime = 517632;

    availableHospitalBedPercent = 0.35;

    Cases4Ventilators = 0.02;

    avgDialyIncomePopulation = 0.71;

    avgDialyIncomeInUSD = 11;

    get product() {
      return this.calcResult();
    }

    calcResult() {
      return {
        data: {
          region: {
            name: 'Africa',
            avgAge: 19.7,
            avgDialyIncomeInUSD: 5,
            avgDialyIncomePopulation: 0.71
          },
          periodType: 'Months',
          timeToElapse: 90,
          reportedCases: 674,
          population: 6662275,
          totalHopitalBeds: 1380614
        },
        estimate: {
          impact: {
            currentlyInfected: (this.reportedCases) * (this.currentlyInfectedTimesTen),
            infectionsByRequestedTime: this.currentlyInfected * (2 ** this.powerOfFactor),
            severeCasesByRequestedTime: (0.15 / 100) * (this.infectionsByRequestedTime),
            hospitalBedsByRequestedTime: (0.35 / 100) * (380614) - (this.TsCByRequestedTime),
            casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * 6901760,
            casesForVentilatorsByRequestedTime: (this.Cases4Ventilators / 100) * (6901760),
            dollarsInFlight: (6901760) * (0.71) * (this.avgDialyIncomeInUSD) * this.timeToElapse
          },
          severeImpact: {
            currentlyInfected: this.reportedCases * this.currentlyInfectedTimesFifty,
            infectionsByRequestedTime: this.currentlyInfected * Math.trunc(2 ** this.powerOfFactor),
            severeCasesByRequestedTime: (this.percentofInfectionsByRequestedTime / 100) * (6901760),
            hospitalBedsByRequestedTime: (this.availableHospitalBedPercent / 100) * (6901760),
            casesForICUByRequestedTime: (this.percentofsevereCasesForICU / 100) * (6901760),
            casesForVentilatorsByRequestedTime: (0.02 / this.divisor) * (6901760),
            dollarsInFlight: (6901760) * this.avgDialyIncomePopulation * (11) * (60)
          }
        }
      };
    }
}
const output = new Covid19ForMonthsData(674, 6740, 10, 50, 90, 2, 2, 0.15, 6901760, 100, 517632,
  0.35, 0.02, 0.71, 11);

console.log(output.product);
