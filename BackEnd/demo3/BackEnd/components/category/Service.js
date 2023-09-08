const categoryModel = require("./Model");

const getAllCategories = async () => {
  try {
    return await categoryModel.find();
 
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllCategories };

var data = [
  {
    _id: 1,
    name: "Gregoor",
  },
  {
    _id: 2,
    name: "Millicent",
  },
  {
    _id: 3,
    name: "Theo",
  },
  {
    _id: 4,
    name: "Bobbette",
  },
  {
    _id: 5,
    name: "Kelsey",
  },
  {
    _id: 6,
    name: "Marylynne",
  },
  {
    _id: 7,
    name: "Bernelle",
  },
  {
    _id: 8,
    name: "Stanwood",
  },
  {
    _id: 9,
    name: "Weber",
  },
  {
    _id: 10,
    name: "Pren",
  },
];
