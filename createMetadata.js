const config = require('./config')
const fs = require('fs')
const metadata = []
const filesList = []


fs.readdirSync(config.inputJsonFolderPath).map(file => {
    filesList.push(file)
})

filesList.map(file => {
    let data = fs.readFileSync(`${config.outputJsonFolderPath}${file}`, {encoding:'utf8', flag:'r'})
    data = JSON.parse(data)
    metadata.push(data)
})

fs.writeFileSync(`${config.outputJsonFolderPath}_metadata.json`, JSON.stringify(metadata, null, 4))

