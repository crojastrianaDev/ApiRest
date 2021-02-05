const Equipos = require("../models/Equipos");

const equiposCtrl = {};
equiposCtrl.createEquipo = async (req, res) => {
  const newEquipo = new Equipos(req.body);
  console.log("Creando nuevo equipo");
  res.json(newEquipo);
  await newEquipo.save();
};
equiposCtrl.readEquipo = async (req, res) => {
  const get = await Equipos.find();
  res.json(get);
};
equiposCtrl.getJugadores = async (req, res) => {
  const jugadores = await Equipos.find({ "torneo.idT": req.params.id });
  res.json(jugadores);
};
module.exports = equiposCtrl;
