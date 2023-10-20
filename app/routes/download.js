const fs = require('fs')

module.exports = function(app) {

    app.get('/download', async (req, res) => {
        const path = './temp/Table.xlsx'
        const name = 'Table.xlsx'

        if (fs.existsSync(path)) {
            return await res.download(path, name)

        } else {
           throw Error
        }

    })
}