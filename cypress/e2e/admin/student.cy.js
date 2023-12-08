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
        it.only('Invite New Student', () => {
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('#firstName')
            .type('Gift')
            cy.get('#lastName')
            .type('Tura')
            cy.get('#email')
            .type('gifttura@shu.ac.uk')
            cy.get('#studentId')
            .type('C3948270')
            cy.get('button[class="button"]')
            .click()
            cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/students#tab=invites')
            
        })

        it('Edit Student', () => {
            cy.wait(500)
            cy.get(':nth-child(2) > :nth-child(5) > :nth-child(1)')
            .click()
            cy.get('#firstName')
            .clear()
            .type('Daniel')
            cy.get('#lastName')
            .clear()
            .type('Band')
            cy.get('#username')
            .clear()
            .type('C3954344')
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
            cy.get(':nth-child(2) > :nth-child(5) > :nth-child(1)')
            .click()
            cy.wait(500)
            cy.get('.text-blue')
            .click()
            cy.wait(500)
            cy.get('#firstName')
            .clear()
            .type('Caroline')
            cy.get('#lastName')
            .clear()
            .type('Obeyi')
            cy.get('#staffId')
            .clear()
            .type('C4872825')
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