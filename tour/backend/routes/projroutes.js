const { json } = require("express");
const express = require("express");
const { find } = require("../models/model");
const router = express.Router();
const User = require("../models/model");
const Place = require("../models/place");

//get all users.
router.get("/allusers", async (req, res) => {
  const user = await User.find({});

  res.status(200).json(user);
  //res.json({ msg: "hello from get"})
});

//get only one user
router.get("/getoneuser/:n", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const user = User.find({ Name: name }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("user found : ", docs);
    }
  });
});

//get one place
router.get("/getoneplace/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const place = await Place.findOne({ Name: name });

  if (!place) {
    console.log("no");
    res.status(404).json("no such place exists");
  } else {
    res.status(200).json(place);
  }
});

//add one new place (only admin allowed)
router.post("/addplace", async (req, res) => {
  const { name, location, time, desc, review, type } = req.body;
  console.log(name);
  const place = new Place({
    Name: name,
    Time: time,
    Location: location,
    Desc: desc,
    Review: review,
    Type: type,
  });
  place.save();
  res.status(200).json(place);
});

//get all places
router.get("/getplaces", async (req, res) => {
  const places = await Place.find({});
  res.status(200).json(places);
});

///add a new review
router.post("/:name", async (req, res) => {
  const { place, review } = req.body;
  const { name } = req.params;

  console.log(review);
  const user = await User.updateOne(
    { Name: name },
    { $push: { Review: review } }
  );

  if (!user) {
    return res.status(404).json({ error: "no such user" });
  } else {
    res.status(200).json(user);
  }
});

//update a review
router.patch("/:name", async (req, res) => {
  const { name, pass, phone } = req.body;
  console.log(name);
  const user = await User.findOneAndUpdate(
    { Name: name },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(404).json({ error: "no such user" });
  } else {
    res.status(200).json(user);
  }
  res.json({ msg: "hello " });
});

router.post("/adduser/hello", async (req, res) => {
  const { name, pass, phone, review } = req.body;
  const user = new User({
    Name: name,
    Password: pass,
    Phone: phone,
    Review: review,
  });
  user.save();
  res.status(200).json(user);
});
// //create new user
// /*router.post("/adduser",async (req,res)=>{

//     /*const user=new User({
//             Name:name,
//             Password:pass,
//             Phone:phone
//     });
//     user.save();
//     res.status(200).json(user)*/

//     res.json({msg:"hello from post"})
// })*/

//delete one user
router.delete("/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const user = await User.findOneAndDelete({ Name: name });
  if (!user) {
    return res.status(404).json({ error: "no such user" });
  } else {
    res.status(200).json(user);
  }
  // res.json({msg:"hello from delete"})
});

//delete one place
router.delete("/deleteoneplace/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const place = await Place.findOneAndDelete({ Name: name });
  if (!place) {
    res.status(404).json("place not found");
  } else {
    res.status(200).json("place deleted");
  }
});

module.exports = router;
