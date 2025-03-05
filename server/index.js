const port = 5000;
const express = require('express');
const app = express();
app.use(express.json());

async function run() {

app.get('/getUrlQR', (req, res) => {
    const url = req.query.url;
    const qr = url;
    res.send(qr);
});
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});