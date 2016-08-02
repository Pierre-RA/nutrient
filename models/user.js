'use strict';

var mongoose = require('mongoose');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
};

var userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  admin: { type: Boolean, default: false },
  editor: { type: Boolean, default: false },
  linguist: { type: Boolean, default: false },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, schemaOptions);

var User = mongoose.model('User', userSchema);

module.exports = User;
