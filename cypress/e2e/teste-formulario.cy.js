describe('Teste de Submit de Formulário', () => {
  
  it('Deve preencher e submeter o formulário', () => {
    cy.visit('http://localhost:5173')
    
    cy.get('[data-cy="nome"]').should('be.visible')
    
    cy.get('[data-cy="nome"]').clear().type('João Silva')
    cy.get('[data-cy="email"]').clear().type('[email protected]')
    cy.get('[data-cy="mensagem"]').clear().type('Esta é uma mensagem de teste')
    
    cy.get('[data-cy="btn-enviar"]').click()

    cy.get('.mensagem-sucesso', { timeout: 10000 }).should('be.visible')

    cy.get('[data-cy="nome"]').should('have.value', '')
    cy.get('[data-cy="email"]').should('have.value', '')
    cy.get('[data-cy="mensagem"]').should('have.value', '')
  })
})
