const fs = require('fs')
const FileType = require('file-type')

;(async () => {
  const file = fs.createReadStream(`${__dirname}/test.jpeg`)
  file.pipe(fs.createWriteStream(`${__dirname}/test.before.jpeg`))
  console.log(await FileType.fromStream(file))
  file.pipe(fs.createWriteStream(`${__dirname}/test.after.jpeg`))
})()