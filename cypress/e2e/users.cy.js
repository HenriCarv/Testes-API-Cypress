


describe('POST /users', () => {

  it('register a new user', () => {

    const user = {
      name: 'Henrique Carvalho',
      email: 'henrike.bg@hotmail.com',
      password: 'pwd123'
    }

    cy.task('removeUser', user.email)

    cy.postUser(user)
    .then(response=> {
      expect(response.status).to.eq(200)
    })

  })

  it('duplicate email', () => {

    const user2 = {
      name: 'James Gunn',
      email: 'Jamesg@hotmail.com',
      password: 'pwd123'
    }
    cy.task('removeUser', user2.email)

    cy.postUser(user2)

    cy.postUser(user2)
    .then(response=> {
      expect(response.status).to.eq(409)
      expect(response.body.message).to.eq('Duplicated email!')
    })

  })

  context('required fields', ()=> {

    let user;

    beforeEach(()=> {
       user = {
        name: 'Margot Robbie',
        email: 'Margot@hotmail.com',
        password: 'pwd123'
      }
    })

    it('name id required', ()=> {
      delete user.name

      cy.postUser(user)
      .then(response=> {

        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq('ValidationError: \"name\" is required')
      })
    })

    it('email id required', ()=> {
      delete user.email

      cy.postUser(user)
      .then(response=> {

        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq('ValidationError: \"email\" is required')
      })
    })

    it('password id required', ()=> {
      delete user.password

      cy.postUser(user)
      .then(response=> {

        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq('ValidationError: \"password\" is required')
      })
    })

  })

})