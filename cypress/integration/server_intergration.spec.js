describe('Capture browser network traffic', function () {
    context('Login functionality', () => {


      it('Dscro should be able to login', () => {
        cy.request('http://localhost:9090/api/Pergunta')
        .should((response) => {
            expect(response.status).to.eq(200)
        })
      })
    })
  })