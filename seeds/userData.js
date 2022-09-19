// const User  = require('../models/User');
const {User, List} = require('')

const userData = [
  {
    // id: 1,
    firstname: 'Sam',
    lastname: 'Simpson',
    dateofbirth: 'April 20, 1980',
    // user_type: 'Patient',
    // institution: 'CVS',
    // recentlistid: 1,
    // createdat: 'June 22, 2021 09:00:00',
    // lastupdated: 'January 18, 2022 09:00:00'
  },
  // {
  //   id: 2,
  //   firstname: 'Jake',
  //   lastname: 'Hammer',
  //   dateofbirth: 'May 11, 1989',
  //   user_type: 'Patient',
  //   institution: 'Duane Reade',
  //   recentlistid: 2,
  //   createdat: 'June 22, 2012 09:00:00',
  //   lastupdated: 'January 18, 2022 09:00:00'
  // },
  // {
  //   id: 3,
  //   firstname: 'Michelle',
  //   lastname: 'Lou',
  //   dateofbirth: 'September 19, 2004',
  //   user_type: 'Patient',
  //   institution: 'CVS',
  //   recentlistid: 3,
  //   createdat: 'July 15, 2018 09:00:00',
  //   lastupdated: 'March 10, 2021 09:00:00'
  // },
  // {
  //   id: 4,
  //   firstname: 'Bob',
  //   lastname: 'Crown',
  //   dateofbirth: 'August 9, 1930',
  //   user_type: 'Patient',
  //   institution: 'CVS',
  //   recentlistid: 4,
  //   createdat: 'August 22, 2020 09:00:00',
  //   lastupdated: 'January 2, 2022 09:00:00'
  // },
];

// const seedUser = () => User.bulkCreate(userData,{individualHooks: true});
const seedUser = () => User.bulkCreate(userData);


module.exports = seedUser;
