// Assuming you have access to the User model and jwtConfig
const User = require("../models/User");

const getProfile = async (req, res) => {
  const { timestamp } = req.body;

  try {
    const user = await User.findOne({ timestamp: timestamp });

    if (!user) {
      return res.status(401).json({ error: "No user??" });
    }

    // Extract relevant user information
    const { username, displayusername, _id } = user;
    res.status(200).json({ username, displayusername, userid: _id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { displayusername, timestamp } = req.body;
    const userId = req.user._id; // Assuming uid is the user's ID in the database

    // Update user's displayusername
    await User.findByIdAndUpdate(userId, { displayusername });

    res.sendStatus(200); // Successfully updated
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getProfile, updateProfile };
