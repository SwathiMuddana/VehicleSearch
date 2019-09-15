Feature: Search vehicle

  @searchvehicle
  Scenario Outline: To check whether correct result is displayed when I search for valid/invalid vehicle
    Given I am on vehicle search page
    When I enter vehicle registration number <RegistrationNumber>
    And I search for vehicle
    Then I should be able to view the result as <result>
    Examples:
      | RegistrationNumber | result                 |
      | OV12UYY            | Result for : OV12UYY   |
      | InvalidReg         | Sorry record not found |
