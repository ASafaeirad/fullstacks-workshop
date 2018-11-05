import mongoose from 'mongoose';
import slugify from 'slugify';

const workshopSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    lowercase: true,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stack',
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

  lecturers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecturer',
  }],

  thumbnail: {
    type: String,
  },
});

workshopSchema.pre('validate', function (next) {
  if (this.isNew && this.slug) {
    this.slug = slugify(this.slug);
  }
  next();
});

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
