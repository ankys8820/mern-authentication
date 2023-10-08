const router = require("express").Router();
const { User, validate } = require("../model/User");
const bcrypt = require("bcryptjs");

// register routes
router.post("/register", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exists!" });
    }
    // hash password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
    }).save();
    res.status(201).send({ message: "User Created successfully!!" });
    // res.send(hashPassword);
  } catch (error) {
    res.status(500).send({ message: "Internal server errror!!!!!" });
    // console.log(error);
  }
  //   console.log("New register");
});

module.exports = router;
