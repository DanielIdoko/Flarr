import mongoose from "mongoose";

const SchoolsSchema = new mongoose.Schema(
  {
    state: String,
    local_government_area: String,
    school_code: {
      type: String,
      minLength: 5,
      maxLength: 10,
    },
    school_name: String,
    level_of_eduaction: String,
    Sector: {
      type: String,
      enum: ["PRIVATE", "PUBLIC"],
    },
    level_offered: String,
  },
  { timestamps: true }
);

const Schools = mongoose.model("Schools", SchoolsSchema);

export default Schools;