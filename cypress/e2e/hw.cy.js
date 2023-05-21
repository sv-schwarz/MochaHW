describe('Basic Form Test', () => {
    const testData = {
        Email: 'test.user@mail.com',
        Password: 'testPassword123.'
    };

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/cosmic-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    });
    
    it.only('The Basic Form is filled with the Email, password and the checkbox is checked', () => {
        cy.get('input[id="exampleInputEmail1"]').type(testData.Email);
        cy.get('input#exampleInputEmail1').should('contain.value', '@');

        cy.get('input[id="exampleInputPassword1"]').type(testData.Password);
        cy.get('input#exampleInputPassword1').should('contain.value', '');

        cy.get('label:contains("Check me out") input[type="checkbox"]').check({ force: true }).should('be.checked');

        cy.get('button[ng-reflect-status="danger"]').click();
       })
})
