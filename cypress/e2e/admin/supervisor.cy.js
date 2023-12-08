///reference types="Cypress"/>
context('Supervisor', () => {
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
      cy.contains('Supervisor')
      .click()
    })

    describe('Confirmed Supervisors', () => {
        it('Invite New Supervisor', () => {
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('#firstName')
            .type('David')
            cy.get('#lastName')
            .type('Ash')
            cy.get('#email')
            .type('davidash@shu.ac.uk')
            cy.get('#staff_id')
            .type('C3944811')
            cy.get('button[class="button"]')
            .click()
            cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/supervisors#tab=invites')
            
        })

        it('Edit Supervisor', () => {
            cy.wait(500)
            cy.get(':nth-child(2) > :nth-child(5) > :nth-child(1)')
            .click()
            cy.get('#firstName')
            .clear()
            .type('Nathan')
            cy.get('#lastName')
            .clear()
            .type('Barry')
            cy.get('#username')
            .clear()
            .type('C3944834')
            cy.get('.modal-card-foot > .is-primary')
            .click()
        })

        it('Deactivate Supervisor', () => {
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-red')
            .click()
            cy.contains('Yes')
            .click()
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-green')
            .should('have.class', 'button has-text-green')


        })

        it('Activate Supervisor', () => {
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-green')
            .click()
            cy.contains('Yes')
            .click()
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-red')
            .should('have.class', 'button has-text-red')
            
        })

        it('Search for Supervisor by StaffID', () => {
            cy.get('input[type="text"]')
            .type('C9585839')
            
        })


    })

    describe('Pending Supervisors', () => {
        it('Edit Details of Pending Supervisor', () => {
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

        it.only('Delete Pending Supervisor', () => {
            cy.get('[href="#tab=invites"]')
            .click()
            cy.get(':nth-child(3) > :nth-child(5) > .has-text-red')
            .click()
            cy.contains('Yes')
            .click()

        })
    })
})