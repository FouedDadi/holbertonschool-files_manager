const express = require('express');
import Routes from './routes/index';

const App = express();
const PORT = process.env.PORT || 5000;

App.use(express.json());
App.listen(PORT, function () {
  console.log(`Example app listening at ${PORT}`);
});
App.use(Routes);
module.exports = App;
