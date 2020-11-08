const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number
    },
    exercises: [ 
        {
        name: {
          type:String,
          trim: true
        }, 
        type: {
          type: String,
          trim: true
        },
        distance: {
            type: Number,
        },
        weight: {
          type: Number
        },
        duration: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        }
      }
      ]

})

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise 