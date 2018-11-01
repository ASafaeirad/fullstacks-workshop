import mongoose from 'mongoose';
import slugify from 'slugify';

const lecturerSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },

  image: String,

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
  if (this.isNew) {
    this.slug = slugify(this.name);
  }
  next();
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

export default Lecturer;
