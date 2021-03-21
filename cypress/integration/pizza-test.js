describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const firstInput = () => cy.get('input[name=firstName]')
    const lastInput = () => cy.get('input[name=lastName]')
    const specialInput = () => cy.get('input[name=special]')
    const checkBoxes = () => cy.get('[type="checkbox"]')
    const submitButton = () => cy.get('form > button')

    it('Can add text to input', () => {
        firstInput().should('have.value', '').type('Alice').should('have.value', 'Alice')

        lastInput().should('have.value', '').type('Frazier').should('have.value', 'Frazier')

        specialInput().should('have.value', '').type('Test').should('have.value', 'Test')
    })

    it('Can mark checkbox', () => {
        checkBoxes().check()
    })

    it('Submit button works', () => {
        submitButton().should('be.enabled')
    })
})
