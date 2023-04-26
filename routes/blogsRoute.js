const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogByID,
  deleteBlogById,
  updateBlogById,
} = require("../controller/blogs");

router.route("/").get(getAllBlogs).post(createBlog);

router
  .route("/:id")
  .get(getBlogByID)
  .delete(deleteBlogById)
  .put(updateBlogById);

module.exports = router;
