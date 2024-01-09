context('Request', () => {

    beforeEach('', () => {
        cy.visit('/')
        cy.get('#email')
        .type('emilypeters@shu.ac.uk')
        .should('have.value', 'emilypeters@shu.ac.uk')
        cy.get('#password')
        .type('Password10$')
        .should('have.value', 'Password10$')
        cy.get('#submit').click()
        cy.url().should('include', '/supervisor/dashboard')
    })

    describe('Request Suite', () => {
        it('Update Research Area', () => {
            cy.get('.list-section-left > .list-section-list > :nth-child(2) > .button')
            .click()
            cy.get('textarea')
            .clear()
            .type('Food and Nutrition, Nutrition and Dietics, Public Health, Diet and Exercise')
            cy.get('button[class="button is-primary is-lg"]')
            .click()
            
        })
    
        it('Approve Pending Request', () => {
            cy.get(':nth-child(2) > .navbar-link')
            .click()
            cy.wait(500)
            cy.get('.request-card-link')
            .click()
            cy.get('.is-primary')
            .click()
            cy.get('.button > .p-button-label')
            .click()
           
    
        })

        it('View Details of Approved Requests', () => {
            cy.get(':nth-child(2) > .navbar-link')
            .click()
            cy.wait(500)
            cy.get('[href="#tab=approved"]')
            .click()
            cy.get(':nth-child(1) > .request-card-list-card-item-inner > .request-card-link')
            .click()
            cy.get(':nth-child(1) > .list-section-list-card-item-inner > :nth-child(2) > h6')
            .should('be.visible')
           
        })

    })
   
})