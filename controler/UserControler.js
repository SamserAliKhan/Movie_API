const data = require("../model/movieModel")
module.exports = {
    get:(req,res)=>{
        res.send(data);
    }
}