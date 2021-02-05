const { Router } = require("express");

const router = Router();
const partidosCtrl = require("../controllers/partidos.controllers");

router.post("/", partidosCtrl.createPartido);
router.get("/", partidosCtrl.readPartidos);
router.get("/:nombre", partidosCtrl.getPartidosJugador);

module.exports = router;
