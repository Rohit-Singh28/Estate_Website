const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const categoryController = require("../controllers/category.js")

router.get("/",wrapAsync(categoryController.showByCategory))

module.exports=router