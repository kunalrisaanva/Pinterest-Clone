import { Router } from "express";
import { 
      renderHomePage,
      renderRegisterPage,
      renderProfilePage,
 } from "../controllers/renderPage.controller.js";

const router = Router();


router.route("/").get(renderHomePage)
router.route("/register").get(renderRegisterPage)
router.route("/profile").get(renderProfilePage)


export default router 

