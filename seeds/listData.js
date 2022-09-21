// const  List  = require('../models/List');
const { List, User } = require("../models");

const listData = [
  {
    list_title: "List 2022",
    list_text: "Advil take 2 twice a day",
    user_id: 1,
  },
  {
    list_title: "List 2021",
    list_text: "Advil take 2 twice a day",
    user_id: 1,
  },
  {
    list_title: "List 2020",
    list_text: "Advil take 2 twice a day",
    user_id: 1,
  },
  {
    list_title: "Morning 2022",
    list_text: "Advil take 2 twice a day",
    user_id: 1,
  },
  {
    list_title: "Hello 2022",
    list_text: "Advil take 2 twice a day",
    user_id: 2,
  },
  {
    list_title: "Goodbye 2022",
    list_text: "Advil take 2 twice a day",
    user_id: 2,
  },
  {
    list_title: "Yes 2022",
    list_text: "Advil take 2 twice a day",
    user_id: 3,
  },
  {
    list_title: "No 2022",
    list_text: "Advil take 2 twice a day",
    user_id: 4,
  },
];

const seedList = () => List.bulkCreate(listData,{individualHooks: true});

module.exports = seedList;
