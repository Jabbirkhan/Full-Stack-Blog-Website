import { Router } from "express";
import {
    handleGithubCallback, handleGoogleCallback, resetPassword, sendContactMessage, sendResetPasswordOtp,
    sendVerifyEmailOtp, userLogin, userLogout, userProfile, userRegistration, userVerify, verifyEmailOtp,
    verifyResetPasswordOtp
} from "../controllers/userControllers.js";
import passport from "passport";
import userAuth from "../middlewares/userAuth.js";
import { getAllLikes, toggleLike } from "../controllers/likeControllers.js";
import { getAllBlogs } from "../controllers/adminControllers.js";
import { allPrinciples } from "../controllers/principleController.js";
import { allPolicies } from "../controllers/policyController.js";
import { alllinks } from "../controllers/linksController.js";
import { allInformation } from "../controllers/informationController.js";

const userRouter = Router();

userRouter.route('/register').post(userRegistration); 
userRouter.route('/login').post(userLogin);
userRouter.route('/verifyuser').get(userAuth, userVerify);
userRouter.route('/profile').get(userAuth, userProfile);
userRouter.route('/logout').post(userLogout);

userRouter.route('/send-verify-email-otp').get(userAuth, sendVerifyEmailOtp);
userRouter.route('/verify-email-otp').post(userAuth, verifyEmailOtp);
userRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
userRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
userRouter.route('/reset-password').post(resetPassword);

userRouter.route("/send-contact-message").post(userAuth, sendContactMessage);

userRouter.route('/allblogs').get(userAuth, getAllBlogs); 
userRouter.route('/alllikes/:id').get(userAuth, getAllLikes); 
userRouter.route('/togglelike/:id').post(userAuth, toggleLike); 

userRouter.route('/allprinciples').get(userAuth, allPrinciples); 
userRouter.route('/allpolicies').get(userAuth, allPolicies); 
userRouter.route('/alllinks').get(userAuth, alllinks); 
userRouter.route('/allinformation').get(userAuth, allInformation); 

// // Google and GitHub authentication routes (for production, without state parameter)
// userRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] })); // state: true allows us to pass the origin in the query
// userRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] })); // state: true allows us to pass the origin in the query

// just for development testing
userRouter.get('/google', (req, res, next) => {
    const origin = req.query.state; // http://localhost:5173 or http://localhost:5174 depending on where the request came from

    passport.authenticate('google', {
        scope: ['profile', 'email'],
        state: origin, // Pass the origin as state to the callback route 
    })(req, res, next);
})

// just for development testing
userRouter.get('/github', (req, res, next) => {
    const origin = req.query.state; // http://localhost:5173 or http://localhost:5174 depending on where the request came from

    passport.authenticate('github', {
        scope: ['user:email'],
        state: origin, // Pass the origin as state to the callback route 
    })(req, res, next);
});

// Callback routes for Google and GitHub authentication
userRouter.get('/google/callback', passport.authenticate('google', { session: false}), handleGoogleCallback); // http://localhost:8006/api/v1/user/google/callback
userRouter.get('/github/callback', passport.authenticate('github', { session: false}), handleGithubCallback); // http://localhost:8006/api/v1/user/github/callback

export default userRouter;