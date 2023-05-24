describe('Basic Form Test', () => {
    const testData = [
        {Email: 'test.user@mail.com', Password: 'testPassword123.', checkboxChecked: true},
        {Email: 'test.user2@mail.com', Password: 'anotherPass2.', checkboxChecked: false}
    ];
    
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/cosmic-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    });

    testData.forEach((data, index) => {
        it(`Test ${index + 1}: The Basic Form is filled with Email, password, and the checkbox is ${data.checkboxChecked ? 'checked' : 'unchecked'}`, () => {
            cy.get('input[id="exampleInputEmail1"]').type(data.Email);
            cy.get('input#exampleInputEmail1').should('have.value', data.Email);

            cy.get('input[id="exampleInputPassword1"]').type(data.Password);
            cy.get('input#exampleInputPassword1').should('have.value', data.Password);
        
            if (data.checkboxChecked) {
                cy.get('label:contains("Check me out") input[type="checkbox"]').check({ force: true }).should('be.checked');
            } else {
                cy.get('label:contains("Check me out") input[type="checkbox"]').should('not.be.checked');
            }

            cy.get('button[ng-reflect-status="danger"]').click();
        });
    });
});
