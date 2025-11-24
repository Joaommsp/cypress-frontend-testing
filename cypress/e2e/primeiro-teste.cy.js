describe('Teste de Integração - Aplicação', () => {
  
  it('Deve carregar a página principal corretamente', () => {
    // Visita a URL da aplicação
    cy.visit('http://localhost:3000')
    
    // Verifica se o título está correto
    cy.title().should('include', 'Sua Aplicação')
    
    // Verifica se a URL está correta
    cy.url().should('include', 'localhost:3000')
  })

  it('Deve interagir com um formulário', () => {
    cy.visit('http://localhost:3000')
    
    // Preenche um campo de input
    cy.get('[data-cy="campo-nome"]').type('Teste Usuario')
    
    // Clica em um botão
    cy.get('[data-cy="btn-enviar"]').click()
    
    // Valida o resultado esperado
    cy.contains('Sucesso').should('be.visible')
  })
})
