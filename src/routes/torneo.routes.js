const { Router } = require("express");

const router = Router();
const torneosCtrl = require("../controllers/torneo.controllers");

router.post("/", torneosCtrl.createTorneo);
router.get("/", torneosCtrl.readTorneos);
module.exports = router;
