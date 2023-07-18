const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch("/users", authenticate, ctrl.updateSubscriptionUser);

router.patch("/avatars", authenticate, upload.single('avatar'), ctrl.updateAvatar);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
