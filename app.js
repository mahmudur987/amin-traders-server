const express = require('express');

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`app listenning on port ${port}`);
});

module.exports = app;
