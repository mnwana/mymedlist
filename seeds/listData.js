// const  List  = require('../models/List');
const  {List, User}  = require('../models');

const listData = [
  {
    // id: 1,
    list_text: 'Advil take 2 twice a day',
    user_id: 1,
  },
  // {
  //   id: 2,
  //   list_text: 'Antibiotics take 1 twice a day',
  //   user_id: 2,
  // },
  // {
  //   id: 3,
  //   list_text: 'Tylenol, Antibiotics',
  //   user_id: 3,
  // },
  // {
  //   id: 4,
  //   list_text: 'Advil, Licenaprone',
  //   user_id: 4,
  // },
];

const seedList = () => List.bulkCreate(listData);

module.exports = seedList;
