const { Schema, model } = require("mongoose");

const gruposScheme = new Schema(
  {
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    equipos: [{ id: { type: Number }, puesto: { type: Number } }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Grupos", gruposScheme);
