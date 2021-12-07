@API
Feature: Numbers Api

	Background: 
		Given a api para realizar requisicao
    And valido o keytoken

 	  Scenario: Testar endpoint date
    And capturo o retorno do body da api date
    Then valido o status da requisicao