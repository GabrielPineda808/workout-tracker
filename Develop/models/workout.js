const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [ 
        {
        name: {
          type:String,
          trim: true
        }, 
        type: {
          type: String,
        },
        distance: {
            type: Number,
            required: true
        },
        weight: {
          type: Number,
          required: true
        },
        duration: {
          type: Number,
          required: true
        },
        set: {
          type: Number,
          required: true
        },
        reps: {
          type: Number,
          required: true
        }
      }
      ],
      duration: {
          type: Number,
          required: true
      }

})

const Exercise = mongoose.model("exercise", exerciseSchema)

module.exports = Exercise 