Feature: Ebay Website

  Scenario Outline: As a user, I can navigate in the Ebay web page, search for Pilas and get the product quantity

    Given I am on the home page
    When I search for an <article> object
    Then I can verify the <quantity> quantity of the product

    Examples:
      | article | quantity                          |
      | Pilas   | 1.300.000+ resultados para Pilas  |
