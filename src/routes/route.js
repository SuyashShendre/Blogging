const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const auth = require("../middleware/auth")

//...........................Author..............................//

router.post("/authors", authorController.createAuthor)

router.post("/login", authorController.login)

//...........................Blog...............................//

router.post("/blogs",auth.tokenChecker, blogController.createBlog)

router.get("/blogs", auth.tokenChecker, blogController.getBlogs)

router.put("/blogs/:blogId", auth.tokenChecker, blogController.update)

router.delete("/blogs/:blogId", auth.tokenChecker, blogController.deleteByBlogId)

router.delete("/blogs", auth.tokenChecker, blogController.deleteByQuery)

//............................................................//

module.exports = router;
