var qaseio = require("qaseio");
var shell = require('shelljs');
var fs = require('fs');
require('dotenv').config()

const { SuiteFilters } = require("../../node_modules/qaseio/dist/src/models/suites.js");

let testSuites;
var projectName = process.env.PROJECT_NAME
var qase = new qaseio.QaseApi(process.env.TOKEN);

// Remove existing features
shell.rm('-rf', '__tests__/features/*');

// Get all test suites
qase.suites.getAll(projectName, {limit: 100, offset: 0}).then((res) => {
  testSuites = res.data.entities;
  var automation = ['manual', 'tobeautomated', 'automated'];

  testSuites.forEach(function (item, index) {
    if (item.parent_id == null){
      // console.log(item, index);

      // Create file folder
      shell.mkdir('-p', './__tests__/features/' + item.title);

        qase.cases.getAll(projectName, { limit: 1000, offset: 0, filters: new SuiteFilters({suite_id : item.id}) }).then((cases) => {
        // crate file feature
        if (cases.data.entities.length != 0){
          cases.data.entities.forEach(function (data, index) {
            // console.log(data)
            fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , 'Fature: ' + item.title + '\n\n', 'utf8');
            fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , '@' + projectName + '-' + data.id + ' ', 'utf8');
            fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , '@' + automation[data.automation] + '\n', 'utf8');
            fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , 'Scenario: ' + data.title + '\n', 'utf8');
            data.steps.forEach(function(scenario, index){
              fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , scenario.action + '\n', 'utf8');
            })
          })
        }
      })
    }
    else{
      qase.suites.get(projectName, item.parent_id).then((res) => {
        // create sub-folder
        shell.mkdir('-p', './__tests__/features/' + res.data.title + '/'+ item.title);

        qase.cases.getAll(projectName, { limit: 1000, offset: 0, filters: new SuiteFilters({suite_id : item.id}) }).then((cases) => {
          // crate file feature
          if (cases.data.entities.length != 0){
            cases.data.entities.forEach(function (data, index) {
              // console.log(data)
              fs.appendFileSync('./__tests__/features/' + res.data.title + '/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , 'Fature: ' + item.title + '\n\n', 'utf8');
              fs.appendFileSync('./__tests__/features/' + res.data.title + '/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , '@' + projectName + '-' + data.id + ' ', 'utf8');
              fs.appendFileSync('./__tests__/features/' + res.data.title + '/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , '@' + automation[data.automation] + '\n', 'utf8');
              fs.appendFileSync('./__tests__/features/' + res.data.title + '/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , ' Scenario: ' + data.title + '\n', 'utf8');
              data.steps.forEach(function(scenario, index){
                fs.appendFileSync('./__tests__/features/' + res.data.title + '/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , '  ', 'utf8');
                fs.appendFileSync('./__tests__/features/' + res.data.title + '/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , scenario.action + '\n', 'utf8');
              })
            })
          }
        })
      })
    }
  });
});
