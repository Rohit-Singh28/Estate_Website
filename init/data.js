const sampleListings = [
  {
    "title": "Luxury Lakeside Villa",
    "description": "A luxurious villa with breathtaking views of a serene lake.",
    "price": 38000,
    "location": "Lakeside Drive, Geneva",
    "country": "Switzerland",
    "owner": "Sophie Dubois",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [6.145677, 46.204391]
    },
    "category": "Others",
    "image":  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Himalayan Retreat",
    "description": "A serene villa nestled in the Himalayas, offering panoramic mountain views.",
    "price": 30000,
    "location": "Himalayan Road, Shimla",
    "country": "India",
    "owner": "Rajesh Kapoor",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [77.174591, 31.104814]
    },
    "category": "Mountain",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Coastal Escape",
    "description": "A modern villa with stunning coastal views and private beach access.",
    "price": 32000,
    "location": "Coastal Highway, Goa",
    "country": "India",
    "owner": "Priya Sharma",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [73.738328, 15.490930]
    },
    "category": "BeachFront",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Mediterranean Villa",
    "description": "An elegant villa overlooking the Mediterranean Sea, offering luxury and comfort.",
    "price": 34000,
    "location": "Mediterranean View, Santorini",
    "country": "Greece",
    "owner": "Alexandros Papadopoulos",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [25.431830, 36.393156]
    },
    "category": "BeachFront",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Japanese Zen Retreat",
    "description": "A tranquil villa in Kyoto, blending traditional Japanese aesthetics with modern comforts.",
    "price": 31000,
    "location": "Zen Garden Avenue, Kyoto",
    "country": "Japan",
    "owner": "Akira Tanaka",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [135.781250, 35.012733]
    },
    "category": "Others",
    "image":{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Tropical Rainforest Villa",
    "description": "A secluded villa in the heart of a tropical rainforest, offering privacy and natural beauty.",
    "price": 29000,
    "location": "Rainforest Drive, Kerala",
    "country": "India",
    "owner": "Ananya Menon",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [76.271080, 10.533644]
    },
    "category": "Others",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Australian Outback Retreat",
    "description": "A luxurious villa in the Australian outback, offering stunning desert views.",
    "price": 33000,
    "location": "Outback Road, Alice Springs",
    "country": "Australia",
    "owner": "Jack Thompson",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [133.880370, -23.698042]
    },
    "category": "Desert",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Amazon Jungle Villa",
    "description": "A villa nestled deep in the Amazon rainforest, surrounded by exotic wildlife and lush greenery.",
    "price": 31000,
    "location": "Amazon Jungle Road, Manaus",
    "country": "Brazil",
    "owner": "Diego Silva",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-60.025492, -3.117686]
    },
    "category": "Others",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "African Savannah Villa",
    "description": "An exclusive villa overlooking the vast African savannah, offering a unique wildlife experience.",
    "price": 36000,
    "location": "Savannah View, Serengeti",
    "country": "Tanzania",
    "owner": "Linda Mbeki",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [34.819901, -2.152466]
    },
    "category": "Others",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Spanish Villa Retreat",
    "description": "A charming villa in the Spanish countryside, offering tranquility and rustic charm.",
    "price": 27000,
    "location": "Countryside Road, Andalusia",
    "country": "Spain",
    "owner": "Carlos Sanchez",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-4.860649, 37.544577]
    },
    "category": "Others",
    "image":{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "New York City Penthouse",
    "description": "A luxurious penthouse villa in the heart of New York City, offering stunning city views.",
    "price": 40000,
    "location": "Penthouse Avenue, New York City",
    "country": "USA",
    "owner": "Sarah Johnson",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-73.977713, 40.758296]
    },
    "category": "Others",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Dubai Marina Villa",
    "description": "A modern villa in Dubai Marina, offering luxury living and stunning waterfront views.",
    "price": 38000,
    "location": "Marina Walk, Dubai",
    "country": "UAE",
    "owner": "Fatima Ali",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [55.140661, 25.078877]
    },
    "category": "BeachFront",
    "image":  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Villa Serenity",
    "description": "A peaceful villa with ocean views and modern amenities.",
    "price": 25000,
    "location": "Ocean View Drive, Malibu",
    "country": "USA",
    "owner": "John Doe",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-118.798615, 34.025919]
    },
    "category": "BeachFront",
    "image":{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Mountain Retreat",
    "description": "A cozy villa nestled in the mountains, perfect for a quiet getaway.",
    "price": 15000,
    "location": "Mountain Road, Aspen",
    "country": "USA",
    "owner": "Jane Smith",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-106.819527, 39.191099]
    },
    "category": "Mountain",
    "image": {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Desert Dream",
    "description": "A unique villa in the desert with a blend of traditional and modern design.",
    "price": 22000,
    "location": "Desert Road, Phoenix",
    "country": "USA",
    "owner": "Mark Johnson",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-112.074036, 33.448376]
    },
    "category": "Desert",
    "image":  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Island Escape",
    "description": "A tropical villa surrounded by lush greenery and exotic views.",
    "price": 30000,
    "location": "Island Resort, Maldives",
    "country": "Maldives",
    "owner": "Emily Clark",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [73.22068, 3.202778]
    },
    "category": "Island",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Hilltop Haven",
    "description": "A stunning villa located on a hilltop with breathtaking views.",
    "price": 23500,
    "location": "Hilltop Road, Santorini",
    "country": "Greece",
    "owner": "Chris Evans",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [25.428953, 36.393156]
    },
    "category": "Hill Station",
    "image":  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Treehouse Bliss",
    "description": "A unique treehouse villa with an immersive nature experience.",
    "price": 18000,
    "location": "Treehouse Lane, Costa Rica",
    "country": "Costa Rica",
    "owner": "Natalie Martinez",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-84.07391, 9.748917]
    },
    "category": "Treehouse",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Rustic Countryside",
    "description": "A charming villa in the countryside with rustic decor and spacious grounds.",
    "price": 16500,
    "location": "Countryside Road, Tuscany",
    "country": "Italy",
    "owner": "Luca Bianchi",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [11.255814, 43.769562]
    },
    "category": "Others",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Seaside Escape",
    "description": "A beautiful villa by the sea with modern amenities and serene views.",
    "price": 27000,
    "location": "Seaside Boulevard, Nice",
    "country": "France",
    "owner": "Marie Dubois",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [7.262005, 43.710173]
    },
    "category": "BeachFront",
    "image":{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Mountain Lodge",
    "description": "A luxurious lodge in the mountains with stunning panoramic views.",
    "price": 22500,
    "location": "Mountain Lodge Road, Banff",
    "country": "Canada",
    "owner": "David Wilson",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-115.572109, 51.178363]
    },
    "category": "Mountain",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Desert Oasis",
    "description": "A tranquil villa in the desert with an expansive outdoor area.",
    "price": 20000,
    "location": "Oasis Drive, Dubai",
    "country": "UAE",
    "owner": "Ali Khan",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [55.270782, 25.204849]
    },
    "category": "Desert",
    "image":  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Island Sanctuary",
    "description": "An exclusive villa on a private island with luxurious amenities.",
    "price": 38000,
    "location": "Private Island, Bora Bora",
    "country": "French Polynesia",
    "owner": "Isabelle Leclerc",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [-151.741490, -16.500413]
    },
    "category": "Island",
    "image": {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Hill Station Hideaway",
    "description": "A serene villa located in the hills with beautiful scenic views.",
    "price": 19500,
    "location": "Hill Road, Shimla",
    "country": "India",
    "owner": "Amit Singh",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [77.173403, 31.104814]
    },
    "category": "Hill Station",
    "image":  {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    "title": "Treehouse Retreat",
    "description": "A secluded treehouse villa surrounded by nature.",
    "price": 16000,
    "location": "Treehouse Avenue, Thailand",
    "country": "Thailand",
    "owner": "Somsak Chai",
    "geoCoordinate": {
      "type": "Point",
      "coordinates": [100.992541, 15.870032]
    },
    "category": "Treehouse",
    "image":{
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  },

]
module.exports = { data: sampleListings };