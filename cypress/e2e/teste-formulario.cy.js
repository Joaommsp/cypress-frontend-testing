describe('Teste de Submit de Formulário', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Deve preencher os campos do formulário', () => {
    cy.get('[data-cy="nome"]').type('João Silva')
    cy.get('[data-cy="nome"]').should('have.value', 'João Silva')
    
    cy.get('[data-cy="email"]').type('[email protected]')
    cy.get('[data-cy="email"]').should('have.value', '[email protected]')
    
    cy.get('[data-cy="mensagem"]').type('Mensagem de teste')
    cy.get('[data-cy="mensagem"]').should('have.value', 'Mensagem de teste')
  })

  it('Deve verificar que o botão de enviar existe', () => {
    cy.get('[data-cy="btn-enviar"]').should('exist')
    cy.get('[data-cy="btn-enviar"]').should('be.visible')
    cy.get('[data-cy="btn-enviar"]').should('not.be.disabled')
  })

  it('Deve limpar os campos após clicar no botão', () => {
    cy.get('[data-cy="nome"]').type('João Silva')
    cy.get('[data-cy="email"]').type('[email protected]')
    cy.get('[data-cy="mensagem"]').type('Teste')
    
    cy.get('[data-cy="btn-enviar"]').click()
    
    cy.get('[data-cy="nome"]').should('have.value', '')
    cy.get('[data-cy="email"]').should('have.value', '')
    cy.get('[data-cy="mensagem"]').should('have.value', '')
  })
})
