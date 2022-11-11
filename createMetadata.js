const config = require('./config')
const fs = require('fs')
const metadata = []
const filesList = []


// fs.readdirSync(config.outputJsonFolderPath).map(file => {
//     filesList.push(file)
// })

// filesList.map(file => {
//     let data = fs.readFileSync(`${config.outputJsonFolderPath}${file}`, {encoding:'utf8', flag:'r'})
//     data = JSON.parse(data)
//     metadata.push(data)
// })

fs.readdirSync(config.outputJsonFolderPath).map(file => {
    let data = fs.readFileSync(`${config.outputJsonFolderPath+file}`, {encoding:'utf8', flag:'r'})
    data = JSON.parse(data)
    metadata.push(data)
})
// console.log(meta)
metadata.sort(function(a,b){return a.edition - b.edition})
fs.writeFileSync(`${config.outputJsonFolderPath}_metadata.json`, JSON.stringify(metadata, null, 4))

