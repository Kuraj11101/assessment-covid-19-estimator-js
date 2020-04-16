import {periodType} from './index.html';
import {product} from './estimator.js';
import {productweeks} from './estimator.js';
import {productmonths} from './estimator.js';

function getformData() {

  let

    // if (select == periodType("1")) {
    //   return product();
    // }
    // else if (select == periodType("2")) {
    //     return productweeks();
    // }
    // if (select == periodType("3")) {
    //     return productmonths();
    // }
}
console.log(getInfoData());

function testData() {

  var getInfoData = document.getElementById('periodType').value
  document.getElementById('data-go-estimator') = getInfoData;

  return testData();
}
console.log(testData());
