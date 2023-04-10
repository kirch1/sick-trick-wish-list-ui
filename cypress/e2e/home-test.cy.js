describe('Sick Trick Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('Should see a page header', () => {
    cy.get('h1').contains('Sick Trick Wish List');
  })
})
