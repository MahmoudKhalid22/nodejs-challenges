const express = require('express');
const userRoute = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(userRoute)

app.listen(PORT,()=>console.log('Server is running now on port http://localhost:' + PORT));
