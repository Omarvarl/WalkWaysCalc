const excel = require('../makeExcel')

module.exports = function(app) {

    app.post('/', async (req, res) => {
        const result = await excel(req.body)
        // console.log(req.body)
        // console.log(result)
        res.end(result)
    })
}