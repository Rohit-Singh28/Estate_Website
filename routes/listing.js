if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const { findById } = require("../models/review.js");
const {isLoggedIn,isOwner,validateListing} = require('../middlewares/middleware.js')
const listingController = require("../controllers/listing.js")
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({storage})

router
.route('/')
.get(wrapAsync(listingController.index )) //index
.post(isLoggedIn,upload.single('listing[image]'),wrapAsync(listingController.addListing)) //post new listing


router
.get('/new',isLoggedIn,listingController.renderNewForm )//create new listings

router
.route('/:id')
.get(wrapAsync(listingController.showListing)) //views
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing, wrapAsync(listingController.update)) //put updated data
.delete(isLoggedIn,isOwner, wrapAsync(listingController.delete)) //Delete

router.get('/:id/edit',isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm))//Update

module.exports = router
