// const router = require("express").Router();

// //REGISTER
// router.post("/register", async (req, res) => {
//   const newUser = await new User.create({
//     username,
//     email,
//     password,
//   });

//   if (newUser) {
//     res.status(201).json({ _id: user.id, email: user.email });
//   } else {
//     res.status(400);
//     throw new Error("User not registered");
//   }

//   res.json({ message: "registered" });

//   //   try {
//   //     const savedUser = await newUser.save();
//   //     res.status(201).json(savedUser);
//   //   } catch (err) {
//   //     res.status(500).json(err);
//   //   }
// });

// module.exports = router;
