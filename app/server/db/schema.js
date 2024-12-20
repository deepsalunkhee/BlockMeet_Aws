const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  passwordHash: {
    type: String,
    require: true,
  },

  conferences: [
    {
      conferenceId: {
        type: String,
        required: true,
      },
      conferenceName: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        required: true,
      },
    },
  ],
});

const conferenceSchema = mongoose.Schema({
  //conference will have list of participants
  name: {
    type: String,
    required: true,
  },
  participants: [
    {
      type: String,
      required: true,
    },
  ],
  //I will add the rest things later
  files: [
    {
      name: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
  ],
  logs: [
    {
      action: {
        type: String,
        required: false,
      },
      timestamp: {
        type: Date,
        required: false,
      },
      by: {
        type: String,
        required: false,
      },
      link: {
        type: String,
        required: false,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
const Conference = mongoose.model("Conference", conferenceSchema);

module.exports = { User, Conference };
