import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js"
import {LoginUser} from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js";
import {verifyJWT} from "../middlewares/auth.middeleware.js" 
import { LogoutUser } from "../controllers/user.controller.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
        name: "avatar",
        maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)


router.post(
  "/login",
  upload.none(), 
  LoginUser
);
//secured routes
router.route("/logout").post( verifyJWT, LogoutUser)

export default router