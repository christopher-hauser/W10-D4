'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('recipes', [
      { name: "One-Pan Rotini with Tomato Cream Sauce", createdAt: new Date('2014-09-03'), updatedAt: new Date('2014-09-03') },
{ name: "Peanut Butter and Jelly Sandwich", createdAt: new Date('2014-11-27'), updatedAt: new Date('2014-11-27') },
{ name: "Smoked mackerel & leek hash with horseradish", createdAt: new Date('2016-06-07'), updatedAt: new Date('2016-06-07') },
{ name: "Beetroot, hummus & crispy chickpea sub sandwich", createdAt: new Date('2016-07-08'), updatedAt: new Date('2016-07-08') },
{ name: "Saucy bean baked eggs", createdAt: new Date('2016-09-06'), updatedAt: new Date('2016-09-06') },
{ name: "Butter bean & chorizo stew", createdAt: new Date('2016-12-26'), updatedAt: new Date('2016-12-26') },
{ name: "Green Grape Pie", createdAt: new Date('2016-07-31'), updatedAt: new Date('2016-07-31') },
{ name: "Curried cauliflower & lentil soup", createdAt: new Date('2017-03-22'), updatedAt: new Date('2017-03-22') },
{ name: "Pesto & goat''s cheese risotto", createdAt: new Date('2019-06-01'), updatedAt: new Date('2019-06-01') },
{ name: "Jerk prawn & coconut rice bowls", createdAt: new Date('2019-11-20'), updatedAt: new Date('2019-11-20') },
{ name: "Sausages with pesto mash", createdAt: new Date('2020-01-05'), updatedAt: new Date('2020-01-05') },
{ name: "Easy laksa", createdAt: new Date('2014-08-30'), updatedAt: new Date('2014-08-30') }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
