///reference types="Cypress"/>

context('System Configuration', () => {
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
          cy.contains('System configuration')
          .click()
    })


    describe('Department', () => {
        it('Add New Department', () => {
            cy.contains('Departments')
            .click()
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('#name')
            .type('Department of Medcine')
            cy.get('.modal-card-foot > .is-primary')
            .click()


        })

        it('Edit Department', () => {
            cy.contains('Departments')
            .click()
            cy.wait(500)
            cy.get(':nth-child(2) > :nth-child(5) > .button')
            .click()
            cy.wait(500)
            cy.get('#name')
            .clear()
            .type('Department of Biochemistry')
            cy.get('.modal-card-foot > .is-primary')
            .click()

        })

        it('Search for Department by Name', () => {
            cy.contains('Departments')
            .click()
            cy.get('input[type="text"]')
            .type('Department of Computing')

        })

    })
    describe('Courses', () => {
        it('Add a New Course', () => {
            cy.contains('Courses')
            .click()
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('#name')
            .type('MSC Data Science')
            cy.get('.css-19bb58m')
            .click()
            cy.get('#react-select-2-option-0')
            .click()
            cy.get('.is-flex > :nth-child(2)')
            .click()

        })

        it('Edit Course', () => {
            cy.contains('Courses')
            .click()
            cy.wait(500)
            cy.get(':nth-child(2) > :nth-child(5) > .button')
            .click()
            cy.get('#name')
            .clear()
            .type('Information Management')
            cy.get('.modal-card-foot > .is-primary')
            .click()


        })

        it.only('Search for Course by Name', () => {
            cy.contains('Courses')
            .click()
            cy.get('input[type="text"]')
            .type('MSC Computing')


        })

    })

})
