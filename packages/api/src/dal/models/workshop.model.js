import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    required: true,
    type: String,
  },
  techs: [{
    name: String,
    icon: String,
  }],
  skill: {
    type: String,
    required: true,
    enum: ['beginner', 'advanced', 'expert'],
  },
  prerequisites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workshop',
  }],
  expects: [{
    type: String,
    default: [],
  }],
  noExpects: [{
    type: String,
    default: [],
  }],
  curriculum: [{
    slug: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },
  }],
});

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
