context('Request', () => {

    beforeEach('', () => {
        cy.visit('/')
        cy.get('#email')
        .type('jolamattew@shu.ac.uk')
        .should('have.value', 'jolamattew@shu.ac.uk')
        cy.get('#password')
        .type('Password10@')
        .should('have.value', 'Password10@')
        cy.get('#submit').click()
        cy.url().should('include', '/student/dashboard')
    })

    describe('Request Suite', () => {
        it('Update Research Topic', () => {
            cy.get('.list-section-left > .list-section-list > :nth-child(2) > .button')
            .click()
            cy.get('textarea')
            .type('Personalized Food and Nutritional Metabolic Profiling to Improve Health')
            cy.get('button[class="button is-primary is-lg"]')
            .click()
            
        })
    
        it('View Supervisors Details', () => {
            cy.wait(500)
            cy.get(':nth-child(2) > .navbar-link')
            .click()
            cy.wait(500)
            cy.get(':nth-child(1) > .request-card-list-card-item-inner > .request-card-link')
            .click()
            cy.wait(500)
            cy.get('.modal-card-title')
            .should('be.visible')
            cy.wait(1500)
            cy.get(':nth-child(1) > .list-section-list-card-item-inner > :nth-child(2) > h6')
            .should('be.visible')
           
    
        })

        it('Search for a Supervisor', () => {
            cy.get(':nth-child(2) > .navbar-link')
            .click()
            cy.get('input[class="input"]')
            .type('Emily{enter}')
            cy.get(':nth-child(1) > .request-card-list-card-item-inner > h5')
            .should('have.text', 'Emily Peters')
           
    
        })

        it('Send Supervisor Request', () => {
            cy.wait(500)
            cy.get(':nth-child(2) > .navbar-link')
            .click()
            cy.wait(500)
            cy.get(':nth-child(2) > .request-card-list-card-item-inner > .request-card-link')
            .click()
            cy.wait(500)
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('.button > .p-button-label')
            .click()
           
    
        })

        it('Cancel Supervisor Request', () => {
            cy.wait(500)
            cy.get(':nth-child(2) > .navbar-link')
            .click()
            cy.wait(500)
            cy.get(':nth-child(2) > .request-card-list-card-item-inner > .request-card-link')
            .click()
            cy.wait(500)
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('.button > .p-button-label')
            .click()
           
    
        })

        it('Send New Supervisor Request', () => {
            cy.wait(500)
            cy.get(':nth-child(2) > .navbar-link')
            .click()
            cy.wait(5000)
            cy.get(':nth-child(3) > .request-card-list-card-item-inner > .request-card-link')
            .click()
            cy.wait(500)
            cy.get('button[class="button is-primary"]')
            .click()
            cy.get('.button > .p-button-label')
            .click()

    })
   
})

})