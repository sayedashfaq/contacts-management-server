import mongoose, { Schema } from "mongoose";

const contactModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("Contact", contactModel);

export default ContactModel