/**
 * 把获取的数据保存到文件中
 * @author lxfriday
 */
const path = require('path')
const fs = require('fs')

function escape(fileName) {
  const reg = /[\/]/g
  const newName = fileName.replace(reg, match => {
    return '_'
  })
  return newName
}

module.exports = (fileName, data) => {
  const filePath = path.resolve(
    __dirname,
    '../assets/articleData',
    escape(fileName) + '.json'
  )
  fs.writeFileSync(filePath, JSON.stringify(data))
}
