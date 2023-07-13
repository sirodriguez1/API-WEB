const Router = require("koa-router");
const users = require("./routes/users.js");
const players = require("./routes/players.js");  
const games = require("./routes/games.js");
const authentications = require("./routes/authentication.js");
const dotenv = require("dotenv");
const jwtMiddleware = require("koa-jwt");

dotenv.config();



const router = new Router();

router.use("/games", games.routes());
router.use("/players", players.routes());
router.use("/users", users.routes());
router.use("/authentications", authentications.routes());





module.exports = router;

