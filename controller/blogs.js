const Blog = require("../models/blog");
//get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ blogs, count: blogs.length });
  } catch (error) {
    console.log(error);
    res.send("Some Error Occured !!!");
  }
};
//create blog
const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (err) {
    res.json(err);
  }
};
//get blogs by passing id
const getBlogByID = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (!blog) {
      return res.json({ message: ` no blogs for id: ${req.params}` });
    }
    res.json(blog);
  } catch (err) {
    res.json(err);
  }
};

const updateBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate({ _id: req.params.id}, req.body ,{
      returnDocument: "after",
      runValidators:true
    });
    if (!blog) {
      return res.json({ message: `no blogs for id:${req.params.id}` });
    }
    res.json(blog);
  } catch (err) {
    res.json(err);
  }
};
const deleteBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id });
    if (!blog) {
      return res.json({ message: `no blogs for id:${req.params.id}` });
    }
    res.json(blog);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogByID,
  deleteBlogById,
  updateBlogById,
};
