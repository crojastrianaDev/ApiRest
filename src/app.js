const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Post documentos
app.use("/api/Arbitros", require("./routes/arbitros.routes"));
app.use("/api/Jugadores", require("./routes/jugadores.routes"));
app.use("/api/Torneos", require("./routes/torneo.routes"));
app.use("/api/Equipos", require("./routes/equipos.routes"));
app.use("/api/Grupos", require("./routes/grupos.routes"));
app.use("/api/Fases", require("./routes/fases.routes"));
app.use("/api/Partidos", require("./routes/partidos.routes"));

module.exports = app;
