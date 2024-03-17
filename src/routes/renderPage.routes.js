import { Router } from "express";
import { renderHomePage , renderRegisterPage } from "../controllers/renderPage.controller.js";

const router = Router();


router.route("/").get(renderHomePage)
router.route("/register").get(renderRegisterPage)


export default router 

