
const mainRoutes = require('./main')
const downloadFile = require('./download')

module.exports =  function (app) {
    mainRoutes(app);
    downloadFile(app);
}