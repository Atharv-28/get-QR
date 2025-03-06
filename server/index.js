const qr = require("qr-image");
const fs = require("fs");
const port = 5000;
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

async function run() {
  app.post("/getUrlQR", (req, res) => {
    try {
      const url = req.body.url;
      console.log(url);
      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream("qr_img.png"));
      writeStream.on("finish", () => {
        res.status(200).json({ message: "Success", qrPath: qrPath });
      });

      writeStream.on("error", (err) => {
        console.error("Error writing QR code:", err);
        res.status(500).json({ message: "Error generating QR code" });
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "An error occurred" });
    }
  });
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
