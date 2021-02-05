const { Schema, model } = require("mongoose");

const jugadoresSchema = new Schema(
  {
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    camiseta: { type: String, required: true },
    posicion: { type: String, required: true },
    incidencias: {
      id: { type: Number, required: true },
      tipo: { type: String, required: true },
      partido: { type: Number, required: true },
      minuto: { type: String, required: true },
      equipo: { type: String, required: true },
      eA: { type: String, required: false },
      eB: { type: String, required: false },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Jugadores", jugadoresSchema);
