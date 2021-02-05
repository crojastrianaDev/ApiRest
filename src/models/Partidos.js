const { Schema, model } = require("mongoose");

const partidosShemas = new Schema(
  {
    id: { type: Number, required: true },
    estadio: { type: String, required: true },
    equipoA: { type: String, required: true },
    equipoB: { type: String, required: true },
    idGrupo: { type: Number, required: true },
    idFase: { type: Number, required: true },
    idTorneo: { type: Number, required: true },
    arbitro: [
      {
        nombre: { type: String, required: true },
        designacion: { type: String, required: true },
      },
    ],
    jugadores: [
      {
        nombre: { type: String, required: true },
        posicion: { type: String, required: true },
        equipo: { type: String, required: true },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);
module.exports = model("Partidos", partidosShemas);
