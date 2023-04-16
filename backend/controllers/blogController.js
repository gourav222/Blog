const blogModel = require("../models/blogModel");

exports.createBlogs = async (req, res) => {
  try {
    const blog = await blogModel.create(req.body);
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};
