const mongoose = require('mongoose');

const { Schema } = mongoose;

const userDetailSchema = new Schema({
  ProgressiveHistoricalUser: {
    type: Number, required: [true, "can't be blank"],
  },
  PerformanceDate: {
    type: String, required: [true, "can't be blank"],
  },
  WeldType: {
    type: String, required: [true, "can't be blank"],
  },
  JointType: {
    type: String, required: [true, "can't be blank"],
  },
  DegreeDifficulty: {
    type: String, required: [true, "can't be blank"],
  },
  ExerciseScore: {
    type: Number, required: [true, "can't be blank"],
  },
  AverageArraySpeed: {
    type: Number, required: [true, "can't be blank"],
  },
  AverageArrayWorkingAngle: {
    type: Number, required: [true, "can't be blank"],
  },
  MediaArrayAngleOrientation: {
    type: Number, required: [true, "can't be blank"],
  },
  AverageArrayDistance: {
    type: Number, required: [true, "can't be blank"],
  },
  ReportExercise: {
    type: Object, required: [true, "can't be blank"],
  },
  User: {
    type: Schema.Types.ObjectId, ref: 'User',
  },
}, { timestamps: true });

class ReportExercise {
  ArrayVelocity;
  ArrayWorkingAngle;
  ArrayAngleOrientation;
  ArrayDistance;
}

module.exports = mongoose.model('UserDetail', userDetailSchema);
