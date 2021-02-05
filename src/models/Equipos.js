const { Schema, model } = require("mongoose");

const equiposSchema = new Schema(
  {
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    torneo: [
      {
        idT: { type: Number },
        jugadores: [
          {
            id: { type: Number },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Equipos", equiposSchema);
