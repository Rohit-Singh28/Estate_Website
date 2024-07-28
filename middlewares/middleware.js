const Listing = require("../models/listing.js")
const Review = require("../models/review.js")
const { listingSchema } = require('../schema.js');


module.exports.isLoggedIn = (req,res,next) => {
    if (!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash('error',"You need to be loggedin")
        return res.redirect('/login');
    }
    next();
};

module.exports.RedirectUrl =(req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if(!listing.owner.equals( req.user._id)){
        req.flash("error","You are not the owner of this listing")
        return res.redirect(`/listings/${id}`);
    }

    next();
}

module.exports.isAuthor = async(req,res,next) => {
    const {id,reviewId} = req.params;
    const review = await Review.findById(reviewId);

    if(!review.author.equals(req.user._id)){
        req.flash("error","you can't delete");
        return  res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);     // for direct poost request throug link eg.hoppscoth
    if (error) {
        throw new ExpressError(401, error);
    }
    else {
        next();
    }
}

