const fs = require('fs')
const config = require('./config')
const addToObject = require('./addToObject')
const filesList = []

fs.readdirSync(config.inputJsonFolderPath).map(file => {
    let data = fs.readFileSync(`${config.inputJsonFolderPath}${file}`, {encoding:'utf8', flag:'r'})
    data = JSON.parse(data)
    let name = `${config.CollectionName + " #"}${file.split('.')[0]}`
    data.name = name
    data.description = config.CollectionName + " Collection"
    fs.writeFileSync(`${config.outputJsonFolderPath}${file}`, JSON.stringify(data, null, 4))
})




