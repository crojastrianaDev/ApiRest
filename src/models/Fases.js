const { Schema, model } = require("mongoose");

const fasesSchema = new Schema(
  {
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    torneo: { type: Number, required: true },
    ganador: { grupo: { type: String }, equipo: { type: String } },
    segundo: { grupo: { type: String }, equipo: { type: String } },
    tercero: { grupo: { type: String }, equipo: { type: String } },
    grupos: [
      {
        nombre: { type: String },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("Fases", fasesSchema);
