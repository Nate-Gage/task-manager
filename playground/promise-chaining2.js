require ('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5dbc9b5221143b82b798e367').then((task) => {
//     console.log(task + ' The task has been deleted')

//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5dc068c2a59121931b682d1c').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})