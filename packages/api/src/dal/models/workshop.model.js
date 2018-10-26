import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },

  title: {
    required: true,
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  time: {
    type: Number,
    required: true,
  },

  students: {
    type: Number,
    default: 0,
  },

  stacks: [{
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

  curriculum: [{
    title: {
      type: String,
      required: true,
    },

    lessons: [{
      type: String,
    }],
  }],

  lecturer: {
    image: String,
    name: String,
    organization: String,
  },

  thumbnail: {
    type: String,
    required: true,
  },
});

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
