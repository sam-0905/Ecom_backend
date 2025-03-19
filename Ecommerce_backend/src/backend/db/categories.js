import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mobile Phones",
    image: require("../../assets/ProductImg/galaxy-s23.png")
  },
  {
    _id: uuid(),
    categoryName: "Watches",
      image: require("../../assets/ProductImg/Redmi_watch5g.png")
  }, 
  {
    _id: uuid(),
    categoryName: "Buds",
      image: require("../../assets/ProductImg/Redmi-Buds5c.png")
  }, 
  {
    _id: uuid(),
    categoryName: "Tablets",
      image: require("../../assets/ProductImg/ipad_10th.png")
  },
];


// {
  //   _id: uuid(),
  //   categoryName: "fiction",
  //   description:
  //     "literature in the form of prose, especially novels, that describes imaginary events and people",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "non-fiction",
  //   description:
  //     "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "horror",
  //   description:
  //     "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  // },