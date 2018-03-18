const mongoose = require("mongoose"),
      bcrypt = require("bcrypt"),
      jwt = require("jsonwebtoken"),
      apiRepsonse = require('../utilities/api_response');

const User = require("../models/user");

exports.signup = (req, res) => {
  User.findOne({$or:[{username: req.body.username}, {email: req.body.email}]}, (err, user) => {
    if (err) {
      apiRepsonse.sendError(err, 500, res);
    }
    if (user) {
      apiRepsonse.sendError("User exists", 409, res);
    } 
    else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          apiRepsonse.sendError(err, 500, res);
        } 
        else {
          const user = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hash
          });
          user
            .save((result) => {
              return apiRepsonse.sendSuccess("User created", res);
            })
            .catch(err => {
              return apiRepsonse.sendError(err, 500, res);
            });
        }
      });
    }
  });
};

exports.login = (req, res) => {
  User.findOne({$or:[{username: req.body.username}, {email: req.body.email}]}, (err, user) => {
    if (err) {
      return apiRepsonse.sendError(err, 500, res);
    }
    if (!user) {
      return apiRepsonse.sendError("User not found", 404, res);
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        return apiRepsonse.sendError("Auth failed", 401, res);
      }
      if (result) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id
          },
          process.env.SECRET,
          {
            expiresIn: "48h"
          }
        );
        const loggedInUser = {
          _id: user._id,
          username: user.username,
          name: user.name
        };
        return apiRepsonse.sendSuccess({user: loggedInUser, token}, res);
      }
      else{
        return apiRepsonse.sendError("Auth failed", 401, res);
      }
    });
  });
};

exports.delete = (req, res) => {
  User.remove({ _id: req.params.userId }, (err, result) => {
    if (err) {
      return apiRepsonse.sendError(err, 500, res);
    }
    return apiRepsonse.sendSuccess("User deleted", res);
  });
};
