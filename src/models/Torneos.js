const { Schema, model } = require("mongoose");

const torneosSchema = new Schema(
  {
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    temporada: { type: String, required: true },
    ganador: { type: Number },
    segundoP: { type: Number },
    tercerP: { type: Number },
    partidos: [
      {
        id: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Torneos", torneosSchema);
