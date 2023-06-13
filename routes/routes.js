const {Router} = require("express");
const router = Router();

const {index,login} = require("../controller/index.js");

router
.get("/",index)
.get("/login",login);


module.exports = router;