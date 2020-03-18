const app = require('express')();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

if(process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
}

app.get('/personal-info/:user', (req, res) => {
  const { user } = req.params;
  if(fs.existsSync(`./mocks/${user}.json`)){
    res.status(200).sendFile(path.resolve(__dirname, 'mocks', `${user}.json`));
  }
});

app.listen(8080, () => console.log('Server listening in port 8080'));