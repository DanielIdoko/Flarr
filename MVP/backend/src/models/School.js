import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema(
  {
    shool_location: {
      type: String,
      trim: true,
      minLength: 20,
      required: [true, "School location is needed"],
      lowercase: true,
    },
    school_website: {
      type: String,
      match: [
        /^(https?):\/\/([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/,
        "Please provide a valid url",
      ],
      required: [true, "School website is required"],
    },
    school_code: {
      type: String,
      required: [true, "School code is required"],
      trim: true,
    },
    school_state: {
      type: String,
      required: [true, "School state is required"],
      trim: true,
    },
    sector: {
      type: String,
      lowercase: true,
      trim: true,
      enum: ["PUBLIC", "PRIVATE"],
    },
    level_offered: {
      type: String,
      lowercase: true,
      trim: true,
      enum: ["JSS only", "SSS only", "JSS and SSS", "PRIVATE"],
      default: "",
    },
    level_of_education: {
      type: String,
      lowercase: true,
      trim: true,
      enum: ["Junior Secondary", "Senior Secondary"],
      default: "",
    },
  },
  { timestamps: true }
);

const School = mongoose.model("School", SchoolSchema);

export default School;
