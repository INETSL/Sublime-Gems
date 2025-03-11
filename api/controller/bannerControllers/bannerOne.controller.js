const { BannerOne } = require("../../models");
const { createBannerOneSchema } = require("../../schemas");

const addBannerOne = async (req, res) => {
  try {
    const { value, error } = createBannerOneSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "fail",
        error: error.message,
        message: "Your request cannot be processed. Please try again",
      });
    }

    // Check if a banner already exists
    const existingBanner = await BannerOne.findOne();
    if (existingBanner) {
      return res.status(400).json({
        status: "fail",
        message:
          "A banner already exists. Please remove the existing banner before adding a new one.",
      });
    }

    const { title } = value;
    const bannerOne = new BannerOne({ title });
    const savedBannerOne = await bannerOne.save();

    res.status(201).json({
      status: "success",
      message: "Banner One added successfully",
      data: savedBannerOne,
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

const getBannerOne = async (req, res) => {
  try {
    const bannerOne = await BannerOne.find();

    // Change from checking !bannerOne to checking for an empty array
    if (!bannerOne.length) {
      return res.status(404).json({
        status: "fail",
        message: "Banner One not found",
      });
    }

    // Corrected 'req.status' to 'res.status'
    res.status(200).json({
      status: "success",
      message: "Banner One fetched successfully",
      data: bannerOne,
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

const editBannerOne = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBanner = await BannerOne.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedBanner) {
      return res.status(404).json({
        status: "fail",
        message: "Banner One not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Banner One updated successfully",
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

const deleteBannerOne = async (req, res) => {
  try {
    const bannerOne = await BannerOne.findByIdAndDelete(req.params.id);

    if (!bannerOne) {
      return res.status(404).json({
        status: "fail",
        message: "Banner One not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Banner One deleted successfully",
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
  addBannerOne,
  getBannerOne,
  editBannerOne,
  deleteBannerOne,
};
