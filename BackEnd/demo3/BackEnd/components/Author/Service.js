const authorModel = require("./Model");

const getAllAuthor = async () => {
  try {
    return await authorModel.find();
    // return data
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllAuthor };
