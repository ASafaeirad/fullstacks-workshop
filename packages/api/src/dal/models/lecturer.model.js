import mongoose from 'mongoose';
import slugify from 'slugify';

const lecturerSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  avatar: {
    type: String,
    default: '/images/lecturers/default.png',
  },

  name: {
    type: String,
    required: true,
  },

  organization: {
    type: String,
    default: 'Fullstacks',
  },
});

lecturerSchema.pre('validate', function (next) {
  if (this.isNew && this.slug) {
    this.slug = slugify(this.slug);
  }

  next();
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

export default Lecturer;
