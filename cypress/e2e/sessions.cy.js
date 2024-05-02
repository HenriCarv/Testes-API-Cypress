

describe('POST //sessions', ()=>{

it('user session', ()=> {

    cy.fixture('users').then(function(users){
        const user = users.sessions
    
        cy.task('removeUser', user.email)
        cy.postUser(user)
    
        cy.postSession(user)
        .then(response => {
          expect(response.status).to.eq(200)
          expect(response.body.user.name).to.eq(user.name)
          expect(response.body.user.email).to.eq(user.email)
          expect(response.body.token).not.to.be.empty
        })
    })
})

it('invalid password', ()=> {

    cy.fixture('users').then(function(users){
        const user = users.inv_pass
        cy.postSession(user)
        .then(response => {
          expect(response.status).to.eq(401)
        })
    
    })
})

it('invalid email', ()=> {

    cy.fixture('users').then(function(users){
        const user = users.emial_404
    
        cy.postSession(user)
        .then(response => {
          expect(response.status).to.eq(400)
        })
    })
})
})