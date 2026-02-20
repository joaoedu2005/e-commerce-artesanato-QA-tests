/*describe.only('Sign up with Google Test', () => { //sign up com Google não está funcionando status code: 403 
  it('success Google sign up', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('.space-x-4 > .bg-amber-600').click()
    cy.get('.inline-flex').click() 
  })
});*/

describe('Sign up Test', () => {
  it('Success sign up', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('.space-x-4 > .bg-amber-600').click()
    cy.get('#nome').type("Victor Cypress de Oliveira")
    cy.get('#email').type("victorcypress@gmail.com")
    cy.get('#senha').type("victorcypress04")
    cy.get('#confirmarSenha').type("victorcypress04")
    cy.get('#telefone').type("88921282729")
    cy.get('.react-datepicker__input-container > .input-field').type("21052004")
    cy.get('#termos').click()
    cy.get('.btn-primary').click()
  })
})

describe('Sign up Test', () => {
  it('Failed Email validation Sign up', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('.space-x-4 > .bg-amber-600').click()
    cy.get('#nome').type("Victor Cypress de Oliveira")
    cy.get('#email').type("victorcypressgmail.com")
    cy.get('#senha').type("victorcypress04")
    cy.get('#confirmarSenha').type("victorcypress04")
    cy.get('#telefone').type("88921282729")
    cy.get('.react-datepicker__input-container > .input-field').type("21052004")
    cy.get('#termos').click()
    cy.get('.btn-primary').click()
  })
})

describe('Login User Test', () => {
  it('Success login', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('[href="/conta/login"]').click()
    cy.get('#email').type("victorcypress@gmail.com")
    cy.get('#senha').type("victorcypress04")
    cy.get(':nth-child(4) > .w-full').click()
  })  
})

describe('Login User Test', () => {
  it('Failed Email validation login', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('[href="/conta/login"]').click()
    cy.get('#email').type("victorcypressgmail.com")
    cy.get('#senha').type("victorcypress04")
    cy.get(':nth-child(4) > .w-full').click()
  })  
})

describe('Login User Test', () => {
  it('Failed Password validation login', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('[href="/conta/login"]').click()
    cy.get('#email').type("victorcypress@gmail.com")
    cy.get('#senha').type("victorcypress05")
    cy.get(':nth-child(4) > .w-full').click()
  })  
})

describe.only('Login Admin Test', () => {
  it('Success login', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('[href="/conta/login"]').click()
    cy.get('#email').type("joaoadmin@artesanato.com")
    cy.get('#senha').type("admin123")
    cy.get(':nth-child(4) > .w-full').click()
  })  
})