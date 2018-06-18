// const express = require('express')
// const cors = require('cors')
// const app = express()
// const MongoClient = require('mongodb').MongoClient
// const bodyParser = require('body-parser')
// const port = process.env.PORT || 5000
// const path = require('path')
// // const routes = require('./routes')

// app.use(cors())

// app.get('/api/wishlist', (req, res) => {
//     res.send([{
//         name: 'Computer',
//         type: 'Electronic',
//         fromWebsite: 'amazon',
//         price: 2000,
//         perMonth: 2
//     }])
//     // .then( json => JSON.stringify(json))
// })

// app.get('/api/hello', (req, res) => {
//     res.send('blammers')
//     // res.csv(path.join(__dirname, 'csvFiles', 'plans.csv'))
// })

// // require('./routes')(app, {});
// // app.listen(port, () => {
// //     console.log('Listening on port ' + port)
// // })


// app.listen(port, () => console.log('Listening on port ' + port))

///////////////////////////////////////////////////////////////

const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
const cors = require('cors')


const app = express()

app.use(cors())

const port = 5000

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)

    require('./routes')(app, database)

    app.listen(port, () => {
        console.log("we are live on " + port)
    })
})

