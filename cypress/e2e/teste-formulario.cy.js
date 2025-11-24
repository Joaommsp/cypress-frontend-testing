describe('Teste de Submit de Formulário', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.wait(1000) 
  })

  it('Deve exibir o formulário completo', () => {
    cy.get('[data-cy="nome"]').should('be.visible')
    cy.get('[data-cy="email"]').should('be.visible')
    cy.get('[data-cy="mensagem"]').should('be.visible')
    cy.get('[data-cy="btn-enviar"]').should('be.visible')
  })

  it('Deve permitir digitar no campo nome', () => {
    cy.get('[data-cy="nome"]').type('João Silva', { delay: 100 })
    cy.get('[data-cy="nome"]').should('not.have.value', '')
  })

  it('Deve permitir digitar no campo email', () => {
    cy.get('[data-cy="email"]').type('teste{shift}@email.com', { delay: 100 })
    cy.get('[data-cy="email"]').should('contain.value', 'email.com')
  })

  it('Deve clicar no botão sem erros', () => {
    cy.get('[data-cy="nome"]').type('Test')
    cy.get('[data-cy="btn-enviar"]').click()
    cy.wait(500)
    cy.get('[data-cy="btn-enviar"]').should('exist')
  })
})
