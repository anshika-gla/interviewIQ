import genToken from "../config/token.js";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    console.log("Before Login:", user);

    if (!user) {
      user = await User.create({
        name,
        email,
      });

      console.log("New User Created:", user);
    }

    console.log("After Login:", user);

    const freshUser = await User.findById(user._id);
    console.log("Fresh User From DB:", freshUser);

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(freshUser);

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Google auth error ${error}`,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      message: "LogOut Successfully",
    });

  } catch (error) {
    return res.status(500).json({
      message: `LogOut error ${error}`,
    });
  }
};