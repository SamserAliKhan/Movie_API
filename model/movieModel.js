const mongoose = require("mongoose");

// const MovieSchema = mongoose.Schema({
//     tite:{
//         type: String,
//         require: true
//     },
// })

// const Movie = mongoose.model("Movie",MovieSchema);
// module.export = Movie ;


exports = function() {
    const mongodb = context.services.get("mongodb-atlas");
    const itemsCollection = mongodb.db("Movie-api-db").collection("Movies");
    // ... paste snippet here ...
    const query = { "titel": { "$gte": "Puss in Boots: The Last Wish" } };
    const projection = {
     "title": 1,
     "quantity": 1,
    }

    return itemsCollection.findOne(query, projection)
      .then(result => {
        if(result) {
          console.log(`Successfully found document: ${result}.`);  
        } else {
          console.log("No document matches the provided query.");
        }
        return result;
      })
      .catch(err => console.error(`Failed to find document: ${err}`));
}