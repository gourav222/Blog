const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
require("./config/config");
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port no.${process.env.PORT}`);
});
