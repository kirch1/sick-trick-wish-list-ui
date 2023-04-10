describe('Sick Trick Tests', () => {
  beforeEach(() => {
    cy.intercept('GET','http://localhost:3001/api/v1/tricks',{
      statusCode: 200,
      body: [
        {
          stance: "testStance",
          name: "900",
          obstacle: "pool",
          tutorial: "https://www.example.com/watch?v=XGw3YkQmNig",
          id: 1
        }
      ]
    })

    cy.intercept('POST','http://localhost:3001/api/v1/tricks',{
      statusCode: 201,
      body: {
          stance: "switch",
          name: "ollie",
          obstacle: "flatground",
          tutorial: "https://www.example.com/watch?v=XGw3YkQmNig",
          id: 2
        }
      
    })

    cy.visit('http://localhost:3000');
  })

  it('Should see a page header', () => {
    cy.get('h1').contains('Sick Trick Wish List');
  })

  it('Should see a form for adding a trick', () => {
    cy.get('form')
      .get('select').first().contains('Choose Your Stance')
      .get('input').first().should('have.attr', 'placeholder', 'Name of Trick')
      .get('select').last().contains('Choose Your Obstacle')
      .get('input').last().should('have.attr', 'placeholder', 'Link to Tutorial')
      .get('button').contains('Send It!')
  })

  it('Should see existing trick card', () => {
    cy.get('.card').first().contains('testStance 900')
    cy.get('.card').first().contains('Obstacle: pool')
    cy.get('.card').first().contains('Link to Tutorial:')
    cy.get('.card').first().contains('https://www.example.com/watch?v=XGw3YkQmNig')
  })

  it('Should be able to input data in form for a new trick', () => {
    cy.get('form')
      .get('select').first().select('regular')
      .get('input').first().type('mega flip')
      .get('select').last().select('ledge')
      .get('input').last().type('https://www.example.com/watch?v=XGw3YkQmNig')
      .get('#submitButton').contains('Send It!')
    
    cy.get('form')
      .get('select').first().invoke("val").should("eq", "regular")
      .get('input').first().invoke("val").should("eq", "mega flip")
      .get('select').last().invoke("val").should("eq", "ledge")
      .get('input').last().invoke("val").should("eq", "https://www.example.com/watch?v=XGw3YkQmNig")
  })

  it('Should be able to create a new trick using form and view it', () => {
    cy.get('form')
      .get('select').first().select('switch')
      .get('input').first().type('ollie')
      .get('select').last().select('flatground')
      .get('input').last().type('https://www.example.com/watch?v=XGw3YkQmNig')
      .get('#submitButton').click()
    
    cy.get('.card').last().contains('switch ollie')
    cy.get('.card').last().contains('Obstacle: flatground')
    cy.get('.card').last().contains('Link to Tutorial:')
    cy.get('.card').last().contains('https://www.example.com/watch?v=XGw3YkQmNig')
  })

})
