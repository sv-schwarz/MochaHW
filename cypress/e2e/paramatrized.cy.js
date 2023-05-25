
describe('Multiple tests', () => {
    const testGoogle = (testData, expectedResult) => 
    
    function() {
        cy.visit('https://google.com');
        
        cy.get('textarea.gLFyf').type(`${testData}`);
        cy.get('div.wM6W7d').should("contain", `${expectedResult}`)
    };
    it('search for CYPRESS', testGoogle('CYPRESS', 'cypress'))
    it('search for AUDI', testGoogle('AUDI', 'audi'))
    it('search for BMW', testGoogle('BMW', 'bmw'))
})

describe('Multiple tests', () => {
        const tests = [
            {testData: [3, 2, 1], expectedResult: '1'},
            {testData: [3, 1, 2], expectedResult: '2'},
            {testData: [1, 2, 3], expectedResult: '3'},
            {testData: [3, 2, 1], expectedResult: '1'},
            {testData: [3, 1, 2], expectedResult: '2'},
            {testData: [1, 2, 3], expectedResult: '3'},
        ]

    tests.forEach(({testData, expectedResult}) => {
        it(`Test ${testData}`, () => {
            cy.visit('https://google.com');
        
            cy.get('textarea.gLFyf').clear().type(testData[0]);
            cy.get('textarea.gLFyf').clear().type(testData[1]);
            cy.get('textarea.gLFyf').clear().type(testData[3]);
            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})