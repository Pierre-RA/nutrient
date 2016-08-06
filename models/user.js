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

userSchema.statics.isAdmin = function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.admin) {
    return next();
  }

  res.redirect('/sign-in');
};

userSchema.statics.isOwn = function isLinguist(req, res, next) {
  if (req.isAuthenticated() &&
    (req.user.admin || req.user._id === req.params.id)) {
    return next();
  }

  res.redirect('/sign-in');
};


var User = mongoose.model('User', userSchema);

module.exports = User;
