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
    set: (v) => {
      if (v === '' || v == null) {
        return '/images/lecturers/default.png';
      }

      return v;
    },
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

  if (this.avatar === '') {
    Reflect.deleteProperty(this, 'avatar');
    console.log(this);
  }

  next();
});

lecturerSchema.methods.toJSON = function () {
  const { __v, ...doc } = this.toObject();
  return doc;
};

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

export default Lecturer;
