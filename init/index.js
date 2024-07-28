const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
const MONGOOSE_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main()
.then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err))

async function main(){
    await mongoose.connect(MONGOOSE_URL);
}

const initDb = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => {return{...obj,owner:'668d4fb69ffcab47ed101bf0'}})
    await Listing.insertMany(initData.data);
    // console.log(initData.data);
} 

initDb();