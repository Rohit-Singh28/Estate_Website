const Listing = require("../models/listing.js");


module.exports.showByCategory = async(req,res) => {
    const {cateoption} = req.params;
    const allListings  =await Listing.find({});
    res.render("category/category.ejs",{cateoption,allListings});
}