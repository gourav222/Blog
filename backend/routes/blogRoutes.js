const express = require("express");
const router = express.Router();
const {createBlogs,getAllBlogs} = require("../controllers/blogController")

router.route("/getschedmsg").get(getAllBlogs);
router.route("/schedMsg").post(createBlogs);
module.exports = router