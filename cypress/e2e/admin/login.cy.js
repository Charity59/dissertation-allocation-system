///reference types="Cypress"/>


context('Login', () => {
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
      it('can login a superadmin', () => {
          cy.get('#email')
          .type('superadmin1@shu.com')
          .should('have.value', 'superadmin1@shu.com')
          cy.get('#password')
          .type('Password10$')
          .should('have.value', 'Password10$')
          cy.get('#submit').click()
          cy.url().should('include', '/admin/dashboard')
  
      })
      it('cannot login with wrong password', () => {
        cy.get('#email')
        .type('superadmin1@shu.com')
        .should('have.value', 'superadmin1@shu.com')
        cy.get('#password')
        .type('Password10*')
        .should('have.value', 'Password10*')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/auth/sign-in')

      })
  
      it('password is case sensitive', () => {
        cy.get('#email')
        .type('superadmin1@shu.com')
        .should('have.value', 'superadmin1@shu.com')
        cy.get('#password')
        .type('PASSWORD10$')
        .should('have.value', 'PASSWORD10$')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/auth/sign-in')

        })

       it('can logout', () => {
        cy.get('#email')
        .type('superadmin1@shu.com')
        .should('have.value', 'superadmin1@shu.com')
        cy.get('#password')
        .type('Password10$')
        .should('have.value', 'Password10$')
        cy.get('#submit')
        .click()
        cy.contains('Sheffield Hallam University')
        .click()
        cy.get('a[class="button"]')
        .click()
        cy.url().should('eq', 'https://dissertation-interface-web-app.vercel.app/')
        
    
        })
          
      })
     
    })
  
  