const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

// console.log(id.id.length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("5db366b657f17c22fd848388")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').updateMany({
        age: { $lt: 800 }
    }, {
        $set: { age: 88 }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({
        age: 88
    }).then((result) => {
        console.log('Successfully Deleted')
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').insertMany([
        {
            name: 'Nate',
            age: 28
        }, {
            name: 'Pip',
            age: 45
        }, {
            name: 'Jose',
            age: 88
        }], (error, result) => {
            if (error) {
                return console.log('could not add')
            }

            console.log(result)
        })

    db.collection('users').deleteOne({
        name: 'Charles' 
    }).then((result, error) => {
        console.log(result)
    }).catch((error) => {   
        console.log(error)
    })

    db.collection('users').findOne({
        name: 'Jose'    
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').updateOne({
        name: 'Jose'
    }, {
        $set: { age: 100 }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
   

})