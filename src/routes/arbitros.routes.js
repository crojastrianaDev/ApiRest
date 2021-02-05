const { Router } = require("express");

const router = Router();

const arbitrosCtr = require("../controllers/arbitro.controllers");

router.post("/", arbitrosCtr.createArbitros);
router.get("/", arbitrosCtr.readArbitros);

module.exports = router;
