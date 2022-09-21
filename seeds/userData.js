const  {List, User}  = require('../models');

const userData = [
  {
    username: 'user_1'    ,
    email: 'user_1@gmail.com' , 
    password: 'password1234',
  },
  {
    username: 'user_2'    ,
    email: 'user_2@gmail.com' , 
    password: 'password1234',
  },
  {
    username: 'user_3'    ,
    email: 'user_3@gmail.com' , 
    password: 'password1234',
  },
  {
    username: 'user_4'    ,
    email: 'user_4@gmail.com' , 
    password: 'password1234',
  },
  {
    username: 'user_5'    ,
    email: 'uesr_5@gmail.com' , 
    password: 'password1234',
  },
];

const seedUser = () => User.bulkCreate(userData,{individualHooks: true});
// const seedUser = () => User.bulkCreate(userData);


module.exports = seedUser;
