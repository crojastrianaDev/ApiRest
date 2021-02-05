const Arbitros = require("../models/Arbitros");

const arbitrosCtrl = {};
arbitrosCtrl.createArbitros = async (req, res) => {
  const newArbitro = new Arbitros(req.body);
  console.log(newArbitro + " Creado el arbitro");
  res.json(newArbitro);
  await newArbitro.save();
};
arbitrosCtrl.readArbitros = async (req, res) => {
  const get = await Arbitros.find();
  res.json(get);
};

module.exports = arbitrosCtrl;
