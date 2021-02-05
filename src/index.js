require("./database");

const app = require("./app");

app.listen(app.get("port"));
console.info("Server init in port: ", 4000);
