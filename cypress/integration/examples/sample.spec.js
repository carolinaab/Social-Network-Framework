describe('My First Test', function () {
    it('Does not do much', function () {
        expect(true).to.equal(true)
    })
})

describe('The Home Page', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:3000/#/') // change URL to match your dev URL
    })
})

describe('The Home Page', function () {
    it('successfull loads', function () {
        cy.visit('/')
    })
})

describe('The Login Page', function () {


    it('sets auth cookie when looging in via from submission', function () {
        const { email, password } = this.state
        cy.visit('/Home')

        cy.get('input[name=email]').type(email)

        // {enter} causes the form to submit
        cy.get('input[name=password]').type(`${password}{enter}`)

        // we should be redirected to /dashboard
        cy.url().should('include', '/Error404')

        // our auth cookie should be present
        cy.getCookie('your-session-cookie').should('exist')

        // UI should reflect this user being logged in
        cy.get('h1').should('contain', 'jane.lane')
    })
})
