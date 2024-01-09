///reference types="Cypress"/>
context('Student', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('#email')
      .type('superadmin1@shu.com')
      .should('have.value', 'superadmin1@shu.com')
      cy.get('#password')
      .type('Password10$')
      .should('have.value', 'Password10$')
      cy.get('#submit').click()
      cy.url().should('include', '/admin/dashboard')
      cy.contains('Student')
      .click()
    })

    describe('Confirmed Students', () => {
        it('Invite New Student', () => {
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('#firstName')
            .type('Amira')
            cy.get('#lastName')
            .type('Tape')
            cy.get('#email')
            .type('amiratape@shu.ac.uk')
            cy.get('#studentId')
            .type('C3940970')
            cy.get('button[class="button"]')
            .click()
            cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/students#tab=invites')
            
        })

        it('Edit Student', () => {
            cy.wait(500)
            cy.contains('Edit')
            .click()
            cy.wait(500)
            cy.get('#firstName')
            .clear()
            .type('Amos')
            cy.get('#lastName')
            .clear()
            .type('Sands')
            cy.get('#username')
            .clear()
            .type('C3997244')
            cy.get('.modal-card-foot > .is-primary')
            .click()
        })

        it('Deactivate Student', () => {
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-red')
            .click()
            cy.contains('Yes')
            .click()
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-green')
            .should('have.class', 'button has-text-green')

        })

        it('Activate Student', () => {
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-green')
            .click()
            cy.contains('Yes')
            .click()
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-red')
            .should('have.class', 'button has-text-red')
            
        })

        it('Search for Student by StudentID', () => {
            cy.get('input[type="text"]')
            .type('c349223')
            
        })

    })

    describe('Pending Student', () => {
        it('Edit Details of Pending Student', () => {
            cy.get('[href="#tab=invites"]')
            .click()
            cy.wait(500)
            cy.contains('View Details')
            .click()
            cy.wait(500)
            cy.get('.text-blue')
            .click()
            cy.wait(500)
            cy.get('#firstName')
            .clear()
            .type('Beth')
            cy.get('#lastName')
            .clear()
            .type('Shawn')
            cy.get('#studentId')
            .clear()
            .type('C4972325')
            cy.get('.modal-card-foot > .is-primary')
            .click()

        })

        it('Delete Pending Student', () => {
            cy.get('[href="#tab=invites"]')
            .click()
            cy.get(':nth-child(3) > :nth-child(5) > .has-text-red')
            .click()
            cy.contains('Yes')
            .click()

        })
    })
})