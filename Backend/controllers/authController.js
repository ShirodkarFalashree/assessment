const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const cloudinary = require("../config/cloudinary");

exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePic = req.file?.path;

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role,
            profilePic,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// exports.login = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });
//         if (!user) return res.status(404).json({ message: "User not found" });
//         console.log("User:", user);
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );
//         console.log("Generated Token:", token);
//         // Set token in HTTP-only cookie
//         res
//             .cookie("token", token, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === "production" ? true : false, // Allow non-secure in development
//                 sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // Lax for development
//                 maxAge: 3600000, // 1 hour
//             })
//             .status(200)
//             .json({ role: user.role, message: "Login successful" });

//     } catch (error) {
//         res.status(500).json({ message: "Something went wrong" });
//     }
// };

exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production" ? true : false,
          sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
          maxAge: 3600000,
        })
        .status(200)
        .json({
          message: "Login successful",
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            profilePic: user.profilePic || null,
          },
        });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
exports.logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logged out successfully" });
};
