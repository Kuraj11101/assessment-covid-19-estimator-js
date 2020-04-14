function getData(slots) {
    this.population = slots.population;
    this.timeToElapse = slots.timeToElaspe;
    this.reportedCases = slots.reportedCases;
    this.totalHospitalBeds = slots.totalHospitalBeds;
    this.periodType = slots.periodType;
  }

  getData.instances = {};
  getDataTableString = localStorage["getDataTable"];
  getDataTable= JSON.parse(getDataTableString);
  getData.convertRowToObj = function (getDataRow) {
      var getData = new getData( getDataRow)
      return getData;
  };

//var covid19 = {model:{}, view:{}, ctrl:{}};
