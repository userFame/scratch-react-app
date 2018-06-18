module.exports = function (app, db) {
    app.post('/test-route', (req, res) => {
        const note = { text: req.body.body, title: req.body.title }
        db.collection('piggy').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occured' })
            } else {
                res.send(result.ops[0])
            }
        })
    })
}