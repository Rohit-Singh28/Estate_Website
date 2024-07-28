const Listing = require("../models/listing.js")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: mapToken });




module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
    res.render('listings/new.ejs')
}

module.exports.addListing = async (req, res, next) => {
    console.log(req.body.listing);

    const { path, filename } = req.file;
    const newListing = new Listing(req.body.listing);

    const response = await geocodingClient.forwardGeocode({
        query: `${newListing.location},${newListing.country}`,
        limit: 1
    })
        .send()

    newListing.geoCoordinate = response.body.features[0].geometry;
    newListing.owner = req.user._id;
    newListing.image = { url: path, filename }
    const saved = await newListing.save();
    console.log(saved);
    req.flash('success', 'New listing added successfully !')
    res.redirect('/listings');
}

module.exports.showListing = async (req, res, next) => {
    const { id } = req.params;
    const details = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!details) {
        req.flash('error', ' listing not found !')
        res.redirect("/listings");
        //  next(new ExpressError(404, 'Data not found'))
    }
    res.render("listings/show.ejs", { details });
}

module.exports.renderEditForm = async (req, res, next) => {
    const { id } = req.params;
    const details = await Listing.findById(id);
    if (!details) {
        req.flash('error', ' listing not found !')
    }
    let imageUrl = details.image.url;
    imageUrl = imageUrl.replace('/upload', '/upload/w_400,h_300'); //cloudinary will resize the image and then forward it

    res.render('listings/edit.ejs', { details, imageUrl })
}

module.exports.update = async (req, res, next) => {
    
    const details = { ...req.body.listing };
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, details);
    let listing = await Listing.findById(id);

    const response = await geocodingClient.forwardGeocode({
        query: `${listing.location},${listing.country}`,
        limit: 1
    })
        .send()
    listing.geoCoordinate = response.body.features[0].geometry;
    await listing.save();

    if (req.file) {
        const { path, filename } = req.file;
        listing.image = { url: path, filename }
        await listing.save();
    }


    req.flash('success', ' edited successfully !')
    res.redirect(`/listings/${id}`);
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'listing deleted successfully !')
    res.redirect("/listings")
}

