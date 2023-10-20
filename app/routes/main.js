const excel = require('../makeExcel')

module.exports = function(app) {

    app.post('/', async (req, res) => {
        const result = await excel(req.body)
        res.end(result)
    })
}