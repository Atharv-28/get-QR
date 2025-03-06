const qr  = require('qr-image');
const fs = require('fs');
const port = 5000;
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

async function run() {

app.post('/getUrlQR', (req, res) => {
    const url = req.body.url;
    console.log(url);
    /*var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));*/
    res.json({ 200: "Success" });
});
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});