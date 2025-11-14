const uploadImage = async (imagePath) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });
    console.log(result)
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  uploadImage,
};
