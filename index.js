const express = require('express');
var ncp = require("copy-paste");
// const clipboard = require('clipboardy');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    var text = req.body.text;

    if (req.body && text) {
        ncp.copy(text, () => console.log("Text copied successfully!"));
    
        res.json({
            status: 200,
            message: "Text copied successfully!"
        });
    } else {
        res.json({
            status: 400,
            message: "Bad request! No payload found."
        });
    }
})

app.listen(PORT, () => console.log("Server listening to PORT: " + PORT));
