const { Router } = require("express");
const router = Router();

const faseCtrl = require("../controllers/fases.controllers");
router.post("/", faseCtrl.createFase);
router.get("/", faseCtrl.readFases);

module.exports = router;
