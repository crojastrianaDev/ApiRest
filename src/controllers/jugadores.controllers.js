const Jugadores = require("../models/jugadores");

const jugadorCtrl = {};

jugadorCtrl.createJugadores = async (req, res) => {
  const newJugador = new Jugadores(req.body);
  console.log(newJugador + " Creado el jugador");
  res.json(newJugador);
  await newJugador.save();
};
jugadorCtrl.readJugadore = async (req, res) => {
  const get = await Jugadores.find();
  res.json(get);
};

module.exports = jugadorCtrl;
