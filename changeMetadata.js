const fs = require('fs')
const metadata = require('./input/_metadata.json');

function makeChanges() {
    const array = metadata.map(item => {
        item.image = `https://terra-mater.s3.amazonaws.com/aac/${item.edition}.png`;
        return item;
    })
    fs.writeFileSync(`./input/output.json`, JSON.stringify(array, null, 4))
}

function createTokenFiles() {
    metadata.map(item => {
        item.image = `ipfs://QmPNCzoM6hq53po8rLG8M64pS3QMUaWN6KxLYuHcVTMDsT/${item.edition}.png`;
        fs.writeFileSync(`./output/${item.edition}.json`, JSON.stringify(item, null, 4))
    })
}

makeChanges()