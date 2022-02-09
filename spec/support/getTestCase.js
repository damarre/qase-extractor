var qaseio = require("qaseio");
var shell = require('shelljs');
require('dotenv').config()
var fs = require('fs');

const { SuiteFilters } = require("../../node_modules/qaseio/dist/src/models/suites.js");

let testSuites;
var result;
var projectName = process.env.PROJECT_NAME
var qase = new qaseio.QaseApi(process.env.TOKEN);

// Remove existing features
shell.rm('-rf', '__tests__/features/*');

// Get all test suites
qase.suites.getAll(projectName, {limit: 100, offset: 0}).then((res) => {
  testSuites = res.data.entities;

  testSuites.forEach(function (item, index) {
    if (item.parent_id == null){
      // console.log(item, index);
      shell.mkdir('-p', './__tests__/features/' + item.title);

        qase.cases.getAll(projectName, { limit: 1000, offset: 0, filters: new SuiteFilters({suite_id : item.id}) }).then((cases) => {
          // shell.mkdir('-p', './__tests__/features/' + item.title + '/' + 'SquadC - ' + cases.id);
        // console.log(res.data.entities)  // TestCaseList{...}
        
        // result = res.data.entities.filter(function(v){
        //   return v.suite_id===item.id;
        // })
        
        // crate file feature
        if (cases.data.entities.length != 0){
          cases.data.entities.forEach(function (data, index) {
            console.log(data)
            fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , 'Fature: ' + data.title + '\n\n', 'utf8');
            fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , 'Scenario: ' + data.description + '\n', 'utf8');
            data.steps.forEach(function(scenario, index){
              fs.appendFileSync('./__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature' , scenario.action + '\n', 'utf8');
            })
            
          })
        }
        // // shell.mkdir('-p', './__tests__/features/' + item.title + '/' + 'SquadC - ' + res.data.entities[0].id);
      })

    }
    else{
      // Create child folder
      // shell.mkdir('-p', './__tests__/features/' + testSuites[item.parent_id].title + '/'+ item.title);
    }
  });

  // array.filter(e => e.length);
  // console.log(result.arr.filter(e => e.length));
  // console.log(result);
});

// Get all test suites

function writeFeatureFile(content){
  writeFile('./features/test2.feature', content, err => {
      if (err) {
          console.error(err)
          return
      }
  })
}