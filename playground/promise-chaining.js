require ('../src/db/mongoose')
const User = require('../src/models/user')

// 5db8a29636bf76441a35f671

// User.findByIdAndUpdate('5db8ac872e0bd145a7a0e9ef', { age: 1 }).then((user) => {
//     console.log(user)

//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5db8a552357f5c448e291387', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})

