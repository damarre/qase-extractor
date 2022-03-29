require('dotenv').config();

const request = require('request');
var projectName = process.env.PROJECT_NAME
var fs = require('fs');
var shell = require('shelljs');
var automation = ['manual', 'tobeautomated', 'automated'];

// Remove existing features
shell.rm('-rf', '__tests__/features/*');

const suiteOptions = {
  method: 'GET',
  url: 'https://api.qase.io/v1/suite/SquadC?limit=100&offset=0',
  headers: {Accept: 'application/json', Token: process.env.TOKEN}
};

request(suiteOptions, function (error, response, body) {
  if (error) throw new Error(error);
  let res = JSON.parse(response.body)
  res = res.result.entities

  res.forEach(function (item, index) {
    if (item.parent_id == null){
      // Create parent file folder
      shell.mkdir('-p', './__tests__/features/' + item.title);

      const testCaseoptions = {
        method: 'GET',
        url: 'https://api.qase.io/v1/case/SquadC?suite_id=' + item.id + '&limit=100&offset=0',
        headers: {Accept: 'application/json', Token: 'ac0e9acaefe09949200d92f18ef01360da68cab4'}
      };
      
      request(testCaseoptions, function (error, response, body) {
        if (error) throw new Error(error);

        let testCase = JSON.parse(response.body);
        testCase = testCase.result.entities;

        sleep(100);
        if (testCase.length != 0){
          testCase.forEach(function (data, index) {
            let path = './__tests__/features/' + item.title + '/' +  projectName + '-' + data.id + '.feature'

            fs.appendFileSync(path , 'Fature: ' + item.title + '\n\n', 'utf8');
            fs.appendFileSync(path , '@' + item.title+ ' ', 'utf8');
            fs.appendFileSync(path , '@' + projectName + '-' + data.id + ' ', 'utf8');
            fs.appendFileSync(path , '@' + projectName + '-' + data.id + ' ', 'utf8');
            fs.appendFileSync(path , '@' + automation[data.automation] + '\n', 'utf8');
            fs.appendFileSync(path , '  Scenario: ' + data.title + '\n', 'utf8');

            if (data.preconditions != null){
              fs.appendFileSync(path , data.preconditions.replace("And", "\tAnd") + '\n', 'utf8');
            }

            data.steps.forEach(function(scenario, index){
              fs.appendFileSync(path , '    ', 'utf8');
              fs.appendFileSync(path , scenario.action + '\n', 'utf8');
            })
            sleep(100);
          })
        }
      });
    }
    else{
      const suiteOptions = {
        method: 'GET',
        url: 'https://api.qase.io/v1/suite/SquadC/' + item.parent_id,
        headers: {Accept: 'application/json', Token: 'ac0e9acaefe09949200d92f18ef01360da68cab4'}
      };

      const testCaseoptions = {
        method: 'GET',
        url: 'https://api.qase.io/v1/case/SquadC?suite_id=' + item.id + '&limit=100&offset=0',
        headers: {Accept: 'application/json', Token: 'ac0e9acaefe09949200d92f18ef01360da68cab4'}
      };
      
      request(suiteOptions, function (error, response, body) {
        if (error) throw new Error(error);
        // Create file folder
        let fileName = JSON.parse(response.body);
        shell.mkdir('-p', './__tests__/features/' + fileName.result.title + '/'+ item.title);

        request(testCaseoptions, function (error, response, body) {
        if (error) throw new Error(error);

        let testCase = JSON.parse(response.body)
        testCase = testCase.result.entities;

        testCase.forEach(function (data, index) {

          // crate file feature
          sleep(100);
          if (testCase.length != 0){
              testCase.forEach(function (data, index) {
                // console.log(data)
                let path = './__tests__/features/' + fileName.result.title + '/' + item.title + '/' +  projectName + '-' + data.id + '.feature' 
                fs.appendFileSync(path , 'Fature: ' + item.title + '\n\n', 'utf8');
                fs.appendFileSync(path , '@' + item.title+ ' ', 'utf8');
                fs.appendFileSync(path , '@' + projectName + '-' + data.id + ' ', 'utf8');
                fs.appendFileSync(path , '@' + automation[data.automation] + '\n', 'utf8');
                fs.appendFileSync(path , '  Scenario: ' + data.title + '\n', 'utf8');
                
                if (data.preconditions != null){
                  fs.appendFileSync(path , '    ', 'utf8');
                  fs.appendFileSync(path , data.preconditions.replace("And", "\tAnd") + '\n', 'utf8');
                }

                data.steps.forEach(function(scenario, index){
                  fs.appendFileSync(path , '    ', 'utf8');
                  fs.appendFileSync(path , scenario.action + '\n', 'utf8');
                })
                sleep(100);
              })
            }
          })
        })
      });
    }
  })
});

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}