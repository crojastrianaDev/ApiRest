const Fases = require("../models/Fases");

const fasesCtrl = {};

fasesCtrl.createFase = async (req, res) => {
  const newFase = new Fases(req.body);
  console.log("Creando Fase");
  res.json(newFase);
  await newFase.save();
};
fasesCtrl.readFases = async (req, res) => {
  const get = await Fases.find();
  res.json(get);
};

module.exports = fasesCtrl;
