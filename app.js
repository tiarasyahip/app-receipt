const express = require("express");
const Logger = require("./utils/Logger");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    Logger.info("d");
    Logger.warn("d");
    Logger.error(["daw", "dawd"]);
    console.log(`app listening on port ${port}`);
});
