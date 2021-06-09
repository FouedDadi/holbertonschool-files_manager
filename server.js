import router from './routes/index';

const express = require('express');

const App = express();
const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
router(App);
module.exports = App;
