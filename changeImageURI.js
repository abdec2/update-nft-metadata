const fs = require('fs')
const config = require('./config')
const addToObject = require('./addToObject')
const filesList = []

fs.readdirSync(config.inputJsonFolderPath).map(file => {
    let data = fs.readFileSync(`${config.inputJsonFolderPath}${file}`, {encoding:'utf8', flag:'r'})
    data = JSON.parse(data)
    let image = `${config.imageURI}${file.split('.')[0]}.png`
    if (data.hasOwnProperty('image')) {
        data.image = image
    } else {
        data = addToObject(data, 'image', image, 2)
    }
    fs.writeFileSync(`${config.outputJsonFolderPath}${file}`, JSON.stringify(data, null, 4))
})




