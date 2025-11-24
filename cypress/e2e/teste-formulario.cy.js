describe('Teste de Submit de Formulário', () => {
  
  it('Deve preencher e submeter o formulário', () => {
    cy.visit('http://localhost:5173') 
    
    cy.get('[data-cy="nome"]').type('João Silva')
    cy.get('[data-cy="email"]').type('[email protected]')
    cy.get('[data-cy="mensagem"]').type('Esta é uma mensagem de teste')
    
    cy.get('[data-cy="btn-enviar"]').click()
    
    cy.contains('Formulário enviado com sucesso').should('be.visible')
  })
})