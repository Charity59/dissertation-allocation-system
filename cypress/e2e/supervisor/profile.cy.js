///reference types="Cypress"/>

describe('Profile', () => {

    beforeEach('', () => {
        cy.visit('/')
        cy.get('#email')
        .type('kennedywash@shu.ac.uk')
        .should('have.value', 'kennedywash@shu.ac.uk')
        cy.get('#password')
        .type('Password10$')
        .should('have.value', 'Password10$')
        cy.get('#submit').click()
        cy.url().should('include', '/supervisor/dashboard')
    })
    it('View Profile Details', () => {
        cy.get('.list-section-left > .list-section-list > :nth-child(1) > .button')
        .click()
        cy.get('#firstName')
        .should('be.visible')
        cy.get('#lastName')
        .should('be.visible')
        cy.get('button[class="button is-primary is-lg no-bg"]')

    })

    it('Update Profile Details', () => {
        cy.get('.list-section-left > .list-section-list > :nth-child(1) > .button')
        .click()
        cy.get('#lastName')
        .clear()
        .type('Washer')
        cy.get('button[class="button is-primary is-lg"]')
        .click()
       
    

    })
})