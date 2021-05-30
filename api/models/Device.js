const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Qty: {
      type: String,
      required: true,
    },
    State: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Device', schema);
