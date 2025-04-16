const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const axiosRes = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_IO_SECRET}`
    );
    res.json(axiosRes.data);
  } catch (err) {
    res.status(500).json({ status: 500, msg: err.message });
  }
});

module.exports = router;
