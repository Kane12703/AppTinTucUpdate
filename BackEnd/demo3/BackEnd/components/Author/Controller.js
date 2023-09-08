const authorService = require("./Service");

const getAllAuthor = async () => {
  try {
    return authorService.getAllAuthor();
  } catch (error) {}
};

module.exports = { getAllAuthor };
