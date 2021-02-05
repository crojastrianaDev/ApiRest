const Torneos = require("../models/Torneos");

const torneosCtrl = {};

torneosCtrl.createTorneo = async (req, res) => {
  const newTorneo = new Torneos(req.body);
  console.log(newTorneo + " Creado el torneo");
  res.json(newTorneo);
  await newTorneo.save();
};
torneosCtrl.readTorneos = async (req, res) => {
  const get = await Torneos.find();
  res.json(get);
};

module.exports = torneosCtrl;
