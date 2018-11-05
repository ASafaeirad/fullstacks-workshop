import mongoose from 'mongoose';
import slugify from 'slugify';

const stackSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  icon: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
    unique: true,
  },
});

stackSchema.pre('validate', function (next) {
  if (this.isNew) {
    this.slug = slugify(this.name);
  }
  next();
});

const Stack = mongoose.model('Stack', stackSchema);

export default Stack;
