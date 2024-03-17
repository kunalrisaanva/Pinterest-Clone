import { Router } from "express";
import { 
      renderHomePage,
      renderRegisterPage,
      renderProfilePage,
 } from "../controllers/renderPage.controller.js";

import {
      fileUpload
} from "../controllers/user.controller.js" 

import { upload } from "../middleware/multer.middleware.js"


const router = Router();


router.route("/").get(renderHomePage)
router.route("/register").get(renderRegisterPage)
router.route("/profile").get(renderProfilePage)

router.route("/fileUpload").post(upload.single("image"),fileUpload)


export default router 

