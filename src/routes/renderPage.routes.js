import { Router } from "express";
import { 
      renderHomePage,
      renderRegisterPage,
      renderProfilePage,
      renderAddPage,
      renderShowPage,
      renderFeedPage
 } from "../controllers/renderPage.controller.js";

import {
      fileUpload
} from "../controllers/user.controller.js" 

import { upload } from "../middleware/multer.middleware.js"


const router = Router();


router.route("/").get(renderHomePage)
router.route("/register").get(renderRegisterPage)
router.route("/profile").get(renderProfilePage)

router.route("/add").get(renderAddPage)
router.route("/show/posts").get(renderShowPage)
router.route("/feed").get(renderFeedPage)


router.route("/fileUpload").post(upload.single("image"),fileUpload)


router.route("/createpost").post(upload.single("postImage"),) // controller add 

export default router 

