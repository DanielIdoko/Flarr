import Schools from "../models/Schools.js";

export const handleGetSchools = async (req, res) => {
  try {
    // test case for validating school
    const schools = await Schools.find({ school_code: "3030283" }).select(
      "school_name _id"
    );

    res.status(200).json({
      success: true,
      message: "School was found",
      data: schools,
      count: schools.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server error',
    });
  }
};
