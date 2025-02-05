// const { json } = require("express");
const express = require("express");
// const { find } = require("../models/model");
const router = express.Router();
const tourist = require("../models/model");
const Place = require("../models/place");

//get all users.
router.get("/allusers", async (req, res) => {
  const user = await tourist.find({});
  res.status(200).json(user);
  //res.json({ msg: "hello from get"})
});

//get only one user
router.get("/getoneuser/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const user = tourist.find({ Name: name }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("user found : ", user);
    }
  });
});

//get one place
router.get("/getoneplace/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log(`Searching for place: ${name}`);

    // Case-insensitive search
    const place = await Place.findOne({ Name: { $regex: new RegExp(`^${name}$`, "i") } });

    if (!place) {
      console.log("No such place found");
      return res.status(404).json({ message: "No such place exists" });
    }

    res.status(200).json(place);
  } catch (error) {
    console.error("Error fetching place:", error);
    res.status(500).json({ message: "Internal Server Error" });
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
// Backend route to add a review
router.post("/:name", async (req, res) => {
  const { place,review,rating } = req.body;
  const { name } = req.params;

  console.log(review);
  const user = await tourist.findOne({ Name: name });
  // Find the user and update their reviews
  if (!user) {
    return res.status(404).json({ error: "No such user exists" });
  } else {
    // After updating the review, retrieve the updated user data
    
    await Place.updateOne(
      { Name: place },
      { $push: { Review: review,Rating:rating } }  // Push the new review into the Review array
    );

    const updatedPlace = await Place.findOne({ Name: place });

    res.status(200).json(updatedPlace);

    // const updatedUser = await tourist.findOne({ Name: name });
    // res.status(200).json(updatedUser);  // Send back the updated user with the reviews
  }
});



//update a review
router.patch("/:name", async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const user = await tourist.findOneAndUpdate(
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

  // Check if all required fields are provided
  if (!name || !pass || !phone) {
    return res.status(400).json({ error: "Name, Password, and Phone are required" });
  }

  // Create a new user object
  const user = new tourist({
    Name: name,
    Password: pass,
    Phone: phone,
    Review: review,
  });

  try {
    // Save the user to the database
    await user.save();
    res.status(200).json(user);  // Send back the created user
  } catch (err) {
    // Catch any errors during the save operation
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//delete one user
router.delete("/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const user = await tourist.findOneAndDelete({ Name: name });
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
