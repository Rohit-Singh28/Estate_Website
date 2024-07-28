const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const{reviewSchema} = require("../schema.js")
const { isLoggedIn,isAuthor } = require("../middlewares/middleware.js");
const user = require("../models/user.js");
const reviewController = require("../controllers/review.js")



const validateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(401,error);
    }
    else{
        next();
    }
}


//post reviews
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.addReview))

//delete review
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.delete))

module.exports = router;