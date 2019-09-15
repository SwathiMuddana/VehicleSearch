$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("vehicleFinder.feature");
formatter.feature({
  "line": 1,
  "name": "Search vehicle",
  "description": "",
  "id": "search-vehicle",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To check whether correct result is displayed when I search for valid/invalid vehicle",
  "description": "",
  "id": "search-vehicle;to-check-whether-correct-result-is-displayed-when-i-search-for-valid/invalid-vehicle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@searchvehicle"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on vehicle search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter vehicle registration number \u003cRegistrationNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for vehicle",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to view the result as \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "search-vehicle;to-check-whether-correct-result-is-displayed-when-i-search-for-valid/invalid-vehicle;",
  "rows": [
    {
      "cells": [
        "RegistrationNumber",
        "result"
      ],
      "line": 10,
      "id": "search-vehicle;to-check-whether-correct-result-is-displayed-when-i-search-for-valid/invalid-vehicle;;1"
    },
    {
      "cells": [
        "OV12UYY",
        "Result for : OV12UYY"
      ],
      "line": 11,
      "id": "search-vehicle;to-check-whether-correct-result-is-displayed-when-i-search-for-valid/invalid-vehicle;;2"
    },
    {
      "cells": [
        "InvalidReg",
        "Sorry record not found"
      ],
      "line": 12,
      "id": "search-vehicle;to-check-whether-correct-result-is-displayed-when-i-search-for-valid/invalid-vehicle;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "To check whether correct result is displayed when I search for valid/invalid vehicle",
  "description": "",
  "id": "search-vehicle;to-check-whether-correct-result-is-displayed-when-i-search-for-valid/invalid-vehicle;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@searchvehicle"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on vehicle search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter vehicle registration number OV12UYY",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for vehicle",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to view the result as Result for : OV12UYY",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleFinderStepDefinition.iNavigateToHomepage()"
});
formatter.result({
  "duration": 5761975400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OV12UYY",
      "offset": 36
    }
  ],
  "location": "VehicleFinderStepDefinition.iEnterVehicleRegistrationNumberRegistrationNumber(String)"
});
formatter.result({
  "duration": 139987732,
  "status": "passed"
});
formatter.match({
  "location": "VehicleFinderStepDefinition.iSearchForVehicle()"
});
formatter.result({
  "duration": 65233811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Result for : OV12UYY",
      "offset": 39
    }
  ],
  "location": "VehicleFinderStepDefinition.iShouldBeAbleToViewTheVehicleRegistrationNumber(String)"
});
formatter.result({
  "duration": 179101302,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 529822181,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To check whether correct result is displayed when I search for valid/invalid vehicle",
  "description": "",
  "id": "search-vehicle;to-check-whether-correct-result-is-displayed-when-i-search-for-valid/invalid-vehicle;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@searchvehicle"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on vehicle search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter vehicle registration number InvalidReg",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for vehicle",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to view the result as Sorry record not found",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleFinderStepDefinition.iNavigateToHomepage()"
});
formatter.result({
  "duration": 5771644175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InvalidReg",
      "offset": 36
    }
  ],
  "location": "VehicleFinderStepDefinition.iEnterVehicleRegistrationNumberRegistrationNumber(String)"
});
formatter.result({
  "duration": 140063288,
  "status": "passed"
});
formatter.match({
  "location": "VehicleFinderStepDefinition.iSearchForVehicle()"
});
formatter.result({
  "duration": 76094788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry record not found",
      "offset": 39
    }
  ],
  "location": "VehicleFinderStepDefinition.iShouldBeAbleToViewTheVehicleRegistrationNumber(String)"
});
formatter.result({
  "duration": 202472803,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 520616987,
  "status": "passed"
});
});