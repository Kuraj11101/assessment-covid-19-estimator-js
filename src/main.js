import {option} from './index.html';

function getInfoData(inputfieldValue) {

    if (inputfieldValue == option("1")) {
      return this.calcResult();
    }
    else if (inputfieldValue == option("2")) {
        return this.calcResultWeeks();
    }
    if (inputfieldValue == option("3")) {
        return this.calcResultmonths();
    }
  }
  console.log(getInfoData());
