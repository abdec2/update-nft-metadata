const fs = require('fs')
const config = require('./config')
const addToObject = require('./addToObject')
const filesList = []

fs.readdirSync(config.outputJsonFolderPath).map(file => {
    let data = fs.readFileSync(`${config.outputJsonFolderPath}${file}`, {encoding:'utf8', flag:'r'})
    data = JSON.parse(data)
    let name = `${config.CollectionName + " #"}${file.split('.')[0]}`
    data.name = name
    data.description = config.CollectionDesc
    fs.writeFileSync(`${config.outputJsonFolderPath}${file}`, JSON.stringify(data, null, 4))
})




