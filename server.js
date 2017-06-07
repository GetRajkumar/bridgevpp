const express = require('express')
const app = express()


//Static files
app.use(express.static('build'));
app.set('views', './build');

app.get('*', function (req, res) {
  res.sendFile('${process.cwd()}/build/index.html')
});

app.listen(2400, function () {
  console.log('app listening on port 2400!')
})