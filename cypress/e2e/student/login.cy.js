///reference types="Cypress"/>


context('Student Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    describe('Page', () => {
      it('has email input', () => {
          cy.get('#email')
          .should('have.value', '')
          .and('be.visible')
          
      })
      it('has password input', () => {
          cy.get('#password')
          .should('have.value', '')
          .and('be.visible')   
  
      })
      it('has login button', () => {
          cy.get('#submit')
          .should('have.value', '')
          .and('be.visible')
  
      })
    })
    describe('User', () => {
      it('can login a student', () => {
          cy.get('#email')
          .type('jolamattew@shu.ac.uk')
          .should('have.value', 'jolamattew@shu.ac.uk')
          cy.get('#password')
          .type('Password10@')
          .should('have.value', 'Password10@')
          cy.get('#submit').click()
          cy.url().should('include', '/student/dashboard')
  
      })
      it('cannot login with wrong password', () => {
        cy.get('#email')
        .type('jolamattew@shu.ac.uk')
        .should('have.value', 'jolamattew@shu.ac.uk')
        cy.get('#password')
        .type('Password10*')
        .should('have.value', 'Password10*')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/auth/sign-in')

      })
  
      it('password is case sensitive', () => {
        cy.get('#email')
        .type('jolamattew@shu.ac.uk')
        .should('have.value', 'jolamattew@shu.ac.uk')
        cy.get('#password')
        .type('PASSWORD10@')
        .should('have.value', 'PASSWORD10@')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/auth/sign-in')

        })

       it('can logout', () => {
        cy.get('#email')
        .type('jolamattew@shu.ac.uk')
        .should('have.value', 'jolamattew@shu.ac.uk')
        cy.get('#password')
        .type('Password10@')
        .should('have.value', 'Password10@')
        cy.get('#submit')
        .click()
        cy.get('.logo')
        .click()
        cy.wait(5000)
        cy.get('a[class="button"]')
        .click()
        cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/')
        
    
        })
          
      })
     
    })
  
  