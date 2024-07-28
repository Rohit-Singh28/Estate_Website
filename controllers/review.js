const Review = require("../models/review.js")
const Listing = require("../models/listing.js");

module.exports.addReview = async(req,res) => {
    const {id} = req.params;

    const review1 = new Review(req.body.review);
    const listing = await Listing.findById(id);
    review1.author = req.user._id;

    await review1.save();
    listing.reviews.push(review1);
    await listing.save();
    req.flash('success','New review added successfully !')

    res.redirect(`/listings/${id}`);
}

module.exports.delete = async (req,res) => {
   
    const {id,reviewId} = req.params;
    const review = await Review.findById(reviewId);


    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}})
    req.flash('success','review deleted successfully !')
    res.redirect(`/listings/${id}`);

}