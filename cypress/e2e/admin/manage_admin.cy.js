///reference types="Cypress"/>

context('Manage Admins', () => {
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
      cy.contains('Manage Admins')
      .click()
    })

    describe('Admin Table', () => {
        it('Add Admin', () => {
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('#firstName')
            .type('Robert')
            cy.get('#lastName')
            .type('George')
            cy.get('#email')
            .type('robertgeorge@shu.ac.uk')
            cy.get('#username')
            .type('C3944775')
            cy.get('label[for="admin"]')
            .click()
            cy.get('button[class="button"]')
            .click()
            cy.url().should('include', '/admin/manage-admins')

        })

        it('Edit Admin', () => {
            cy.wait(500)
            cy.get(':nth-child(2) > :nth-child(5) > :nth-child(1)')
            .click()
            cy.get('#firstName')
            .clear()
            .type('Toni')
            cy.get('#lastName')
            .clear()
            .type('Tone')
            cy.get('#username')
            .clear()
            .type('C6958553')
            cy.contains('Update')
            .click()

        })

        it('Deactivate Admin', () => {
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-red')
            .click()
            cy.contains('Yes')
            .click()
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-green')
            .should('have.class', 'button has-text-green')

        })

        it('Activate Admin', () => {
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-green')
            .click()
            cy.contains('Yes')
            .click()
            cy.get(':nth-child(2) > :nth-child(5) > .has-text-red')
            .should('have.class', 'button has-text-red')

        })

        it('Search for Admin by UserID', () => {
            cy.get('input[class="input"]')
            .type('C6958683')

        })
    })
    })