const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');
const svgo = new SVGO();
const map = require('async-each-map');
const files = fs.readdirSync('./src')
  .filter(file => path.extname(file) === '.svg')
  .map((file) => {
    return {
      name: path.basename(file, '.svg'),
      content: fs.readFileSync(path.join('./src', file)).toString()
    };
  });

map(files, (obj, cb) => {
  svgo.optimize(obj.content, (result) => {
    cb(null, {
      name: obj.name,
      old: obj.content,
      content: result.data
    });
  });
}, (err, res) => {
  if (err) throw err;


  res.forEach(obj => {
    const content =
`// generated on ${new Date()}
module.exports = '${obj.content}'
`;
    fs.writeFileSync(path.join('./js', obj.name + '.js'), content);
  });
  console.log(JSON.stringify(res, null, 2))
});
