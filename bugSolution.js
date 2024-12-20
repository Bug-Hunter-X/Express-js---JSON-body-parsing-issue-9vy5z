const express = require('express');
const app = express();
// express.json() must be placed before route handlers
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body); // req.body will now contain the JSON data
  res.send('Success');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});