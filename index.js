const express = require('express');
const app = express();
const PORT = 5001;

app.get('*', (req, res) => {
   res.send('Hello World!')
});

app.listen(PORT, () => {
   console.log(`Listening on Port ${PORT}...`)
});