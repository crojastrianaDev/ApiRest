const Grupos = require("../models/Grupos");

const gruposCtrl = {};
gruposCtrl.createGrupo = async (req, res) => {
  const newGrupo = new Grupos(req.body);
  console.log("Creando nuevo grupo");
  res.json(newGrupo);
  await newGrupo.save();
};
gruposCtrl.readGrupo = async (req, res) => {
  const get = await Grupos.find();
  res.json(get);
};
module.exports = gruposCtrl;
