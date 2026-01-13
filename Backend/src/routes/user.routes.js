import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js"
import {LoginUser} from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js";

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
  upload.none(), // ✅ REQUIRED for form-data without files
  LoginUser
);

export default router