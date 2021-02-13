import express from 'express';
import hoFunctions from './functions';

const app = express()

app.get('/', (req, res) => {
  res.send(hoFunctions())
})

app.listen(5000, () => {
  console.log('Example app listening at http://localhost:5000')
})
