const Partidos = require("../models/Partidos");

const partidosCtrl = {};

partidosCtrl.createPartido = async (req, res) => {
  const newPartido = new Partidos(req.body);
  console.log("Creando nuevo partido");
  res.json(newPartido);
  await newPartido.save();
};
partidosCtrl.readPartidos = async (req, res) => {
  const get = await Partidos.find();
  res.json(get);
};
partidosCtrl.getPartidosJugador = async (req, res) => {
  let get = await Partidos.find({ "jugadores.nombre": req.params.nombre });
  res.json(get);
};

module.exports = partidosCtrl;
