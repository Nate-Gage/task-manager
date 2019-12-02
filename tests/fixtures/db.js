const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Donkey Kong',
    email: 'dk@example.com',
    password: 'donkeykong123',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_TOKEN)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Magikoopa',
    email: 'magikoopa@example.com',
    password: 'supersluggers123',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_TOKEN)
    }]
} 

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    title: 'First task',
    owner: userOneId,
    completed: false
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    title: 'Second task',
    owner: userOneId,
    completed: true
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    title: 'Third task',
    owner: userTwoId,
    completed: true
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userTwoId,
    userOne,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}