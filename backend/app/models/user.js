const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  Name: {
    type: String, required: [true, "can't be blank"],
  },
  SurName: {
    type: String, required: [true, "can't be blank"],
  },
  Email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    index: true,
  },
  TelePhone: {
    type: String, required: [true, "can't be blank"],
  },
  ScholasticInstitute: {
    type: String, required: [true, "can't be blank"],
  },
  Class: {
    type: String,
  },
  City: {
    type: String,
  },
  Details: [{
    type: Schema.Types.ObjectId, ref: 'UserDetail',
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
