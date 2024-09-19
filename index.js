const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, heroku! THis is test jenkins node application deploy. Welcome to devops. THis is jenkins');
});

app.listen(port, () => {
  console.log("FIrst step completed")
  console.log(`Server running on port ${port}`);
});
