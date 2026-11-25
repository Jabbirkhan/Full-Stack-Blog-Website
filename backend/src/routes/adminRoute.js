import { Router } from "express";
import {resetPassword, 
    addNewBlog, adminLogin, adminRegister, deleteBlog, getAllBlogs, logoutAdmin, sendResetPasswordOtp,
    updateBlog, verifyAdmin, verifyResetPasswordOtp
} from "../controllers/adminControllers.js";
import upload from "./../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";
import { addPrinciple, allPrinciples, updatePrinciple } from "../controllers/principleController.js";
import { addPolicies, allPolicies, updatePolicies } from "../controllers/policyController.js";
import { addlinks, alllinks, updatelinks } from "../controllers/linksController.js";
import { addInformation, allInformation, updateInformation } from "../controllers/informationController.js";

const adminRouter = Router();

adminRouter.route('/register').post(adminRegister);
adminRouter.route('/login').post(adminLogin);
adminRouter.route('/verify').get(adminAuth, verifyAdmin);
adminRouter.route('/logout').post(logoutAdmin);

adminRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
adminRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
adminRouter.route('/reset-password').post(resetPassword);

adminRouter.route('/addblog').post(adminAuth, upload.single("image"), addNewBlog);
adminRouter.route('/allblogs').get(adminAuth, getAllBlogs);
adminRouter.route('/updateblog/:id').patch(adminAuth, upload.single("image"), updateBlog);
adminRouter.route('/deleteblog/:id').delete(adminAuth, deleteBlog);

adminRouter.route('/addprinciple').post(adminAuth, addPrinciple);
adminRouter.route('/allprinciples').get(adminAuth, allPrinciples);
adminRouter.route('/updateprinciple/:id').patch(adminAuth, updatePrinciple);

adminRouter.route('/addpolicies').post(adminAuth, addPolicies);
adminRouter.route('/allpolicies').get(adminAuth, allPolicies);
adminRouter.route('/updatepolicies/:id').patch(adminAuth, updatePolicies);

adminRouter.route('/addlinks').post(adminAuth, addlinks);
adminRouter.route('/alllinks').get(adminAuth, alllinks);
adminRouter.route('/updatelinks/:id').patch(adminAuth, updatelinks);

adminRouter.route('/addinformation').post(adminAuth, addInformation);
adminRouter.route('/allinformation').get(adminAuth, allInformation);
adminRouter.route('/updateinformation/:id').patch(adminAuth, updateInformation);

export default adminRouter;