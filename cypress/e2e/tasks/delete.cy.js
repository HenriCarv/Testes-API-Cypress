describe('DELETE /tasks/:id', () => {

    beforeEach(function () {
        cy.fixture('tasks/delete').then(function (tasks) {
            this.tasks = tasks
        })
    })

    it('remove a task', function () {

        const { user, task } = this.tasks.remove

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(respUser => {

                cy.postTask(task, respUser.body.token)
                    .then(taskResp => {

                        cy.deleteTask(taskResp.body._id, respUser.body.token).then(Response => {
                            expect(Response.status).to.eq(204)
                        })
                    })
            })
    })

    it('task not found', function () {

        const { user, task } = this.tasks.notfound

        cy.task('removeTask', task.name, user.email)
        cy.task('removeUser', user.email)
        cy.postUser(user)

        cy.postSession(user)
            .then(respUser => {

                cy.postTask(task, respUser.body.token)
                    .then(taskResp => {

                        cy.deleteTask(taskResp.body._id, respUser.body.token).then(Response => {
                            expect(Response.status).to.eq(204)
                        })
                        cy.getUniqueTask(taskResp.body._id, respUser.body.token).then(Response => {
                        expect(Response.status).to.eq(404)
                    })
            })
    })
})
})