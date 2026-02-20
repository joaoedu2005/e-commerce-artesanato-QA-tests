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

describe.only('Login with Checkout Test', () => {
  it('Success Login and Checkout', () => {
    cy.visit('https://centroartesanato.netlify.app/')
    cy.get('[href="/conta/login"]').click()
    cy.get('#email').type("victorcypress@gmail.com")
    cy.get('#senha').type("victorcypress04")
    cy.get(':nth-child(4) > .w-full').click()
    cy.contains('Produtos em Destaque')
    cy.get('[href="/produtos/6938cb5824f18195dd8514a4"] > .p-4 > .flex > .bg-amber-600').click()
    cy.get('.go4109123758 > .go2072408551').should('not.exist') // Esperando o toaster de sucesso desaparecer de cima do carrinho
    cy.get('.hidden.space-x-4 > .text-gray-700.relative > .absolute').click() 
    cy.get('.space-y-4 > .w-full').click()
    cy.get('#retirada').click()
    cy.get('#termos').click()
    cy.get('.py-3').click()
    cy.get('form > .bg-amber-600').click() 
    cy.get('#observacoes').type("Evitar entregar às 14h")
    cy.get('form > .bg-amber-600').click()
    cy.get(':nth-child(2) > :nth-child(2) > .relative > .flex').click()
  })  
})

