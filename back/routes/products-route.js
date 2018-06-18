const ObjectId = require('mongodb').ObjectId

module.exports = function (app, db) {
    // Get All function
    app.get('/products-route', (req, res) => {
        db.collection('products').find().toArray()
            .then(products => {
                // console.log(products)
                // for (let i = 0; i < products.length; i++) {
                //     let product = products[i]
                //     product.productName = products[i].productName
                //     product.price = products[i].price
                //     product.url = products[i].url
                //     product.ppm = products[i].ppm
                //     product.type = products[i].type
                //     product.list = products[i].list
                // }
                // return product
                res.send(products)
            }).then(json => JSON.stringify(json))
            .catch(err => console.log(err))
    })

    // Get By ID function
    app.get('/products-route/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectId(id) }
        db.collection('products').findOne(details, (err, item) => {
            if (err) {
                res.send(`an error has occured in getbyid function`)
            } else {
                res.send(item)
            }
        })
    })

    // Post function
    app.post('/products-route', (req, res) => {
        console.log(req.body)
        const product = {
            productName: req.body.productName,
            price: req.body.price,
            url: req.body.url,
            ppm: req.body.ppm,
            type: req.body.type,
            list: req.body.list
        }
        db.collection('products').insert(product, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occured' })
            } else {
                res.send(result.ops[0])
            }
        })
    })

    // update function
    app.put('/products-route/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectId(id) }
        const product = {
            productName: req.body.productName,
            price: req.body.price,
            url: req.body.url,
            ppm: req.body.ppm,
            type: req.body.type,
            list: req.body.list
        }
        db.collection('products').update(details, product, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occured' })
            } else {
                res.send(item)
            }
        })
    })


    // delete function
    app.delete('/products-route/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectId(id) }
        db.collection('products').remove(details, (err, item) => {
            if (err) {
                res.send(`an error has occured in delete function`)
            } else {
                res.send(`item ${id} has been deleted. details: ${details}`)
                console.log(`item ${id} has been deleted. details: ` + JSON.stringify(details))
            } 
        }).then(json =>  {
             console.log('json', JSON.stringify(json))
            //  Promise.resolve()
        })
        .catch(err => console.log(err))
    })
}