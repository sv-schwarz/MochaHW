describe("Positive test suit", () => {
  it('Test1', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test2', () => {
    cy.visit('https://example.cypress.io');
  })

  it.skip('Test3', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test4', () => {
    cy.visit('https://example.cypress.io');
  })
})

describe("Negative test suit", () => {
  it('Test1', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test2', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test3', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test4', () => {
    cy.visit('https://example.cypress.io');
  })
})

describe.skip("Some test suit", () => {

  describe("Some another test suit", () => {
    it('Test1', () => {
      cy.visit('https://example.cypress.io');
    })
  
    it('Test2', () => {
      cy.visit('https://example.cypress.io');
    })
  
    it('Test3', () => {
      cy.visit('https://example.cypress.io');
    })
  
    it('Test4', () => {
      cy.visit('https://example.cypress.io');
    })
  })

  it('Test1', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test2', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test3', () => {
    cy.visit('https://example.cypress.io');
  })

  it('Test4', () => {
    cy.visit('https://example.cypress.io');
  })
})

