const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { HttpError } = require("../helpers");

const dotenv = require("dotenv");
dotenv.config();

const { SECRET_KEY } = process.env;

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
      user: {
        subscription: newUser.subscription,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password, subscription = "starter" } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, "Email or password is wrong");
    }
    const passwordCompare = bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw HttpError(401, "Email or password is wrong");
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

    await User.findByIdAndUpdate(user._id, { token });

    res.json({
      token,
      user: {
        subscription,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};

// const getCurrent = async (req, res, next) => {
//   try {

//     res.json({
//       email,
//       subscription,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const logout = async (req, res, next) => {
  try {
    const { _conditions } = req.user;

    await User.findByIdAndUpdate(_conditions, { token: "" });

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  // getCurrent,
  logout,
};
