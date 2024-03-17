import { Router } from "express";
import { renderHomePage } from "../controllers/user.controller.js";

const router = Router();


router.route("/").get(renderHomePage)


export default router 

