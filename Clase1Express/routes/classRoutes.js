const express = require("express");
const Class = require("../models/Class");
const router = express.Router();

// --- CREATE (POST) ---
router.post("/create", async(request, response) => {
    console.log("REQUEST CLIENT ---", request.headers);
    response.status(200).json({code: "OK", message:"Todo muy bien"});
});

module.exports = router;