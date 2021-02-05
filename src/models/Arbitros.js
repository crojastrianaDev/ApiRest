const { Schema, model } = require("mongoose");

const arbitrosShema = new Schema(
  {
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Arbitros", arbitrosShema);
