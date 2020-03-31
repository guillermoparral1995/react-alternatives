const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
const handleError = require('./middlewares/errorHandler');

app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production') {
  app.use(cors());
} else {
  app.use('/', expressStaticGzip('dist', {
    enableBrotli: true
  }));
}

app.post('/personal-info/save', (req, res, next) => {
  const { username } = req.body;
  try {
    const filepath = path.resolve(__dirname, 'mocks', `${username}.json`);
    fs.writeFileSync(filepath, JSON.stringify(req.body));
    res.status(200).send({
      message: 'Saved successfully!',
      status: 200,
      data: req.body
    });
  } catch (error) {
    next(error);
  }
});

app.get('/personal-info/:user', (req, res, next) => {
  const { user } = req.params;
  try {
    const filepath = `./mocks/${user}.json`;
    if(fs.existsSync(filepath)){
      res.status(200).sendFile(path.resolve(__dirname, filepath));
    } else {
      throw { message: `User ${user} not found`, status: 404 };
    } 
  } catch (error) {
    next(error);
  }
});

app.use(handleError);

app.listen(8082, () => console.log('Server listening in port 8082'));