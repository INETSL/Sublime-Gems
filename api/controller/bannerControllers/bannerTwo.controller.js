const { BannerTwo } = require("../../models");
const { createBannerTwoSchema } = require("../../schemas");

const addBannerTwo = async (req, res) => {
  try {
    const { value, error } = createBannerTwoSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "fail",
        error: error.message,
        message: "Your request cannot be processed. Please try again",
      });
    }

    // Check if a banner already exists
    const existingBanner = await BannerTwo.findOne();
    if (existingBanner) {
      return res.status(400).json({
        status: "fail",
        message:
          "A banner two already exists. Please remove the existing banner before adding a new one.",
      });
    }

    const { title } = value;
    const bannerTwo = new BannerTwo({ title });
    const savedBannerTwo = await bannerTwo.save();

    res.status(201).json({
      status: "success",
      message: "Banner Two added successfully",
      data: savedBannerTwo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: error.message,
      message: "Your request cannot be processed. Please try again",
    });
  }
};

const getBannerTwo = async (req, res) => {
  try {
    const bannerTwo = await BannerTwo.find();

    // Change from checking !bannerTwo to checking for an empty array
    if (!bannerTwo.length) {
      return res.status(404).json({
        status: "fail",
        message: "Banner Two not found",
      });
    }

    // Corrected 'req.status' to 'res.status'
    res.status(200).json({
      status: "success",
      message: "Banner Two fetched successfully",
      data: bannerTwo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      // Changed from 400 to 500 to reflect server error
      status: "fail",
      error: error.message,
      message: "Your request cannot be processed. Please try again",
    });
  }
};

const editBannerTwo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBanner = await BannerTwo.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedBanner) {
      return res.status(404).json({
        status: "fail",
        message: "Banner Two not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Banner Two updated successfully",
      data: updatedBanner,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      // Changed from 400 to 500 to reflect server error
      status: "fail",
      error: error.message,
      message: "Your request cannot be processed. Please try again",
    });
  }
};

const deleteBannerTwo = async (req, res) => {
  try {
    const bannerTwo = await BannerTwo.findByIdAndDelete(req.params.id);

    if (!bannerTwo) {
      return res.status(404).json({
        status: "fail",
        message: "Banner Two not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Banner Two deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      // Changed from 400 to 500 to reflect server error
      status: "fail",
      error: error.message,
      message: "Your request cannot be processed. Please try again",
    });
  }
};

module.exports = {
  addBannerTwo,
  getBannerTwo,
  editBannerTwo,
  deleteBannerTwo,
};
