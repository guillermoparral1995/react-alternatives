const app = require('express')();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const handleError = require('./middlewares/errorHandler');

if(process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
}

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

app.listen(8080, () => console.log('Server listening in port 8080'));