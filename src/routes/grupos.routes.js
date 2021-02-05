const { Router } = require("express");

const router = Router();
const grupoCtrl = require("../controllers/grupos.controllers");

router.post("/", grupoCtrl.createGrupo);
router.get("/", grupoCtrl.readGrupo);
module.exports = router;
