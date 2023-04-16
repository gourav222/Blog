const mongoose =  require('mongoose');
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please Enter the tittle for your blog"]
    },
    launchdate:{
        type:String,
        required:[true,"Please Enter the launch date for your blog"]
    },
    author:{
        type:String,
        required:[true,"Please Enter the author for your blog"]
    },
    image_link:{
        type:String,
        required:[true,"Provide the Url of your blog image"]
    },
    description:{
        type:String,
        required:[true,"Please enter the description of your blog"]
    }
})
module.exports = mongoose.model("blogs",blogSchema);