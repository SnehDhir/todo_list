"use strict";
var Items = require("../models/items");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;



var addItems = function (req, res) {
  try {
    let object = req.body;
    var new_item = new Items(object);
    new_item.save(function (err, result) {
      if (err) {
        return res.json({
          status: 404,
          error: err,
        });
      } else {
        return res.json({
          status: 200,
          msg: "Item added successfully",
          data: result,
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

var getAllItems = function (req, res) {
  try {
    Items.find(function (err, result) {
      if (err) {
        return res.json({
          status: 404,
          error: err,
        });
      } else {
        return res.json({
          status: 200,
          msg: "All Items fetched successfully",
          data: result,
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

var getItemById = function (req, res) {
  try {
    let body = {
      _id: ObjectId(req.body._id),
    };

    Items.find(body, (err, result) => {
      if (err) {
        return res.json({
          status: 404,
          error: err,
        });
      } else {
        return res.json({
          status: 200,
          msg: "Item fetched successfully",
          data: result,
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};
var deleteItemById = function (req, res) {
  try {
    let body = {
      _id: ObjectId(req.body._id),
    };

    Items.deleteOne(body, (err, result) => {
      if (err) {
        return res.json({
          status: 404,
          error: err,
        });
      } else {
        return res.json({
          status: 200,
          msg: "Item deleted successfully",
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};


var updateItem = function (req, res) {
  Items.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    function (err, data) {
      if (err) {
        res.json({ status: 500, msg: "somthing went wrong" });
      } else {
        return res.json({
          status: 200,
          msg: "item updated successfully",
          data: data,
        });
      }
    }
  );
};





exports.addItems = addItems;
exports.getAllItems = getAllItems;
exports.getItemById = getItemById;
exports.deleteItemById = deleteItemById;
exports.updateItem = updateItem;
