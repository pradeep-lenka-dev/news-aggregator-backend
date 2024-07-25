const express = require('express');
const userrouter = require ("./routers/userrouter")
const app = express();
const port = 3000;

app.use(express.json());
app.use('/users',userrouter)
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;