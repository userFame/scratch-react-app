const ObjectId = require('mongodb').ObjectId
const request = require('request')
const cheerio = require('cheerio')

module.exports = function (app, db) {
    // Get All function
    app.get('/products-route', (req, res) => {
        db.collection('products').find().toArray()
            .then(products => {
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
        let product = {
            productName: req.body.productName,
            price: req.body.price,
            url: req.body.url,
            ppm: req.body.ppm,
            type: req.body.type,
            list: req.body.list,
            cheerio: req.body.cheerio
        }
        // add cheerio to body of req === true so that post knows it is coming from cheerio
        if (req.body.cheerio === true) {
            console.log(req.body)
            request(req.body.url, function(err, resp, html) {
                
                if(!err) {
                    // console.log(`from cheerio html: ${html}`)
                    const $ = cheerio.load(html)
                    // console.log('trying to log title', $('#mainContainer > div > div > div.styles__TopContainerDiv-vttgqz-2.dIPHNm > div.styles__DescriptionContainerDiv-vttgqz-3.dalZqG > div.h-margin-v-tight.h-padding-h-default > h1 > span').text())
                    product.url = req.body.url
                    product.productName = $('#mainContainer > div > div > div.styles__TopContainerDiv-vttgqz-2.dIPHNm > div.styles__DescriptionContainerDiv-vttgqz-3.dalZqG > div.h-margin-v-tight.h-padding-h-default > h1 > span').text()
                    product.price = $('#mainContainer > div > div > div.styles__TopContainerDiv-vttgqz-2.dIPHNm > div.styles__SidebarContainerDiv-vttgqz-4.fBTXbo > div > div > div:nth-child(1) > span').text()
                    product.ppm = Number(req.body.ppm)
                    product.type = req.body.type
                    product.list = req.body.list
                    product.cheerio = req.body.cheerio

                    console.log('this is the product object', product)
                   

                    let moneySignIndex = product.price.indexOf('$')
                    let includesMoneySign = product.price.includes('$')
                    let regex = /sale/gi

                    if (includesMoneySign) {
                        // to get only number from price if there is letters in it 
                        // https://justcode.me/how-to/remove-text-from-string-in-javascript/
                        // product.price = Number(product.price.slice(moneySignIndex + 1)) with a .match(/\d+$/)
                        console.log('product.price', product.price)
                        product.price = product.price.slice(moneySignIndex + 1)
                        console.log(product.price)
                        // if (product.includes('sale' || 'Sale'))
                        product.price = Number(product.price.replace(regex, ''))
                        console.log('product.price after', product.price, typeof(product.price))
                        // product.priceRemoveSale = Number((product.price).match('/\d+$/'))
                        // console.log('product.price', product.price)

                        
                    } else {
                        // let regex = /sale/gi
                        // product.price = Number(product.price.replace(regex, ''))
                        product.price = Number((product.price).match('/\d+$/'))
                        console.log('this is the price', product.price)
                    }



                    db.collection('products').insert(product, (err, result) => {
                        if (err) {
                            res.send({ 'error': 'An error has occured' })
                        } else {
                            res.send(result.ops[0])
                        }
                    })
                }
            })
        } else {
            product.ppm = Number(req.body.ppm)
            product.price = Number(req.body.price)
            db.collection('products').insert(product, (err, result) => {
                if (err) {
                    res.send({ 'error': 'An error has occured' })
                } else {
                    res.send(result.ops[0])
                }
            })
        }
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