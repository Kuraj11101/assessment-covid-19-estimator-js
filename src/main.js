import {option} from './index.html';
//import {covid19InfoData.calcResult} from './estimator.js';

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

    var getInfoData = document.getElementById('periodType').value

    document.getElementById('data-go-estimator') = getInfoData;
  }
  console.log(getInfoData());
