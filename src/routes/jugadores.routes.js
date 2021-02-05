const { Router } = require("express");

const router = Router();
const jugadoresCtrl = require("../controllers/jugadores.controllers");

router.post("/", jugadoresCtrl.createJugadores);
router.get("/", jugadoresCtrl.readJugadore);

module.exports = router;
