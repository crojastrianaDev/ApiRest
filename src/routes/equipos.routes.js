const { Router } = require("express");

const router = Router();
const equipoCtrl = require("../controllers/equipos.controllers");

router.post("/", equipoCtrl.createEquipo);
router.get("/", equipoCtrl.readEquipo);
router.get("/:id", equipoCtrl.getJugadores);
module.exports = router;
