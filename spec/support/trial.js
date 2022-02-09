var qaseio = require("qaseio");
var shell = require('shelljs');
require('dotenv').config()

const { SuiteFilters } = require("qaseio/dist/src/models/suites");

let testSuites;
var result;
var projectName = process.env.PROJECT_NAME
var qase = new qaseio.QaseApi(process.env.TOKEN);

// Remove existing features
shell.rm('-rf', '__tests__/features/*');

// Get all test suites

qase.cases.getAll("SquadC", { limit: 20, offset: 0, filters: new SuiteFilters({suite_id: 3}) }).then((casesData) => {
//qase.cases.getAll(projectName, { limit: 1000, offset: 0, filters: new SuiteFilters({suite_id : 1})}.then((res) => {
  console.log(casesData.data.entities)  // TestCaseList{...}
  
})
