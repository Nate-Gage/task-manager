const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { 
    userOne, 
    userTwo, 
    userTwoId, 
    userOneId, 
    taskOne, 
    taskTwo, 
    taskThree, 
    setupDatabase 
} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            title: "Get into the grid"
        })
        .expect(201)

     const task = await Task.findById(response.body._id) 
     expect(task).not.toBeNull()  
     expect(task.completed).toBe(false)
})

test('Should get all tasks for user', async () => {
    const response = await request(app)
        .get('/tasks/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)
})

test('Should not allow unauthorized user to delete task', async () => {
    const response = await request(app)
        .delete(`tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404)

    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
})