describe('Enviar Formulario', () => {
    it('testar o envio de formulario', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="autor"]')
        .type('hermivaldo braga');
  
      cy.get('[data-testid="pergunta"]')
        .type('Como fazer teste integrado com React?');
      
        cy.get('[data-testid="submit"]')
        .click();
  
      cy.get('[data-testid="messageText"]')
        .should('have.value', '');
  
      cy.contains('New message');
    });
  });