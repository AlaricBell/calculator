describe('Initial load', () => {
  it('should load the calculator', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // the input field should not contain any value after getting rendered
    cy.get('.input-calc').should('be.empty')

    // get the first numeric button and click it
    cy.get('button[name*="1"]').click()

    // the input field should contain the value of the clicked button
    cy.get('.input-calc').should('have.value', '1')

    // get the last numeric button and click it twice
    cy.get('button[name*="0"]').click().click()

    // the input field should contain the value of the clicked buttons
    cy.get('.input-calc').should('have.value', '100')

    // add a floating point number to the input
    cy.get('button[name*="."]').click()
    cy.get('button[name*="5"]').click()

    // the input field should contain the value of the clicked buttons as a floating point number
    cy.get('.input-calc').should('have.value', '100.5')

    // get the backspace button and click it twice
    cy.get('button[name*="backspace"]').click().click()

    // the input field should no longer contain floating point number
    cy.get('.input-calc').should('have.value', '100')

    // get the save button and click it
    cy.get('button[name*="save"]').click()

    // get the clear button and click it
    cy.get('button[name*="clear"]').click()

    // the input field should be empty
    cy.get('.input-calc').should('have.value', '')

    // get the read button and click it
    cy.get('button[name*="read"]').click()

    // the input field should contain the saved number
    cy.get('.input-calc').should('have.value', '100')
  })
})