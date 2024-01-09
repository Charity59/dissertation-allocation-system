///reference types="Cypress"/>

    describe('Request Page', () => {
        it('View Details of Approved Request', () => {
            cy.visit('/')
            cy.get('#email')
            .type('superadmin1@shu.com')
            .should('have.value', 'superadmin1@shu.com')
            cy.get('#password')
            .type('Password10$')
            .should('have.value', 'Password10$')
            cy.get('#submit').click()
            cy.url().should('include', '/admin/dashboard')
            cy.contains('Request')
            .click()
            cy.wait(500)
            cy.contains('Approved')
            .click()
            cy.wait(500)
            cy.get(':nth-child(1) > .request-card-list-card-item-inner > .request-card-link')
            .click()
            cy.wait(500)
            cy.get('.modal-card-title')
            .should('be.visible')
            cy.get(':nth-child(1) > .list-section-list-card-item-inner > :nth-child(2) > h6')
            .should('be.visible')
            cy.contains('mikesmith@shu.ac.uk')
            .should('be.visible')

        })
    })