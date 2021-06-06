var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var ItemSchema = new Schema({
  created_by: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;



