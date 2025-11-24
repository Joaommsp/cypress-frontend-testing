describe('Teste de Integração - Aplicação', () => {
  
  it('Deve carregar a página principal corretamente', () => {
    // Visita a URL da aplicação
    cy.visit('http://localhost:5173')
    
    // Verifica se o título está correto
    cy.title().should('include', 'cypress-frontend-testing')
    
    // Verifica se a URL está correta
    cy.url().should('include', 'localhost:5173')
  })
})
