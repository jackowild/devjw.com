const express = require('express');
const app = express();

app.use(express.static('src'));
app.use('/node_modules', express.static('node_modules'))
app.listen(3000, () => console.log('Server running on port 3000'));