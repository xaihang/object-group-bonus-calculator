// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// ------------ REFERENCES: -------------- //
// //  1. baseBonus // how? employee's annualSalary - which depends on employee's rating. 
//     let baseBonus = employees.annualSalary * employees.reviewRating;

// //  2. yearAdjustment  // how? 
//     let yearAdjustment = 

// //  3. incomeAdjustment // how? 
//     let incomeAdjustment = 

// // year adjustment = *** IF: employeeNumber is 4digits long = employee's rating + extra 5% of their annualIncome
// // incomeAdjustment = ** IF: annualIncome is greater than 65,000 = bonusAdjusted DOWN 1 % of their annualIncome
// // ***** NO BONUS can be above 13% OR  below 0% total 
// baseBonus < 13 % || > 0 %


//--------- This function will calculate 1 employee's bonus!----------

function calculateIndividualEmployeeBonus( employee ) {  
  // ======> your logic here

  // ======> return new object with bonus results

}
// calculateIndividualEmployeeBonus();


