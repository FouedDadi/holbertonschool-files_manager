import router from './routes/index';

const express = require('express');

const App = express();
const PORT = process.env.PORT || 5000;

App.use(express.json());
App.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
App.use(router);
module.exports = App;
