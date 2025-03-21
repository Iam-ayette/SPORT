// import express app
const app = require('./backend/app');
// server is lestenning on port 3000

app.listen(3000, () => {
    console.log('Express Server is listening on port 3000 ...');
});