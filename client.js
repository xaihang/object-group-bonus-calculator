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


//  🌟 individual employee object 
function employeeObject (employees) {
  for (let employee of employees) {
    // console.log('checking employee existence:', employee);
    calculateIndividualEmployeeBonus(employee)
  }
}

function calculateIndividualEmployeeBonus( employee ) { 
  // ======> your logic here

//  🌟 checking employee rating to determined bonusPercentage
let bonusPercentage = 0.00;
if (employee.reviewRating <= 2 ) {
  bonusPercentage = 0.00;
} else if (employee.reviewRating === 3) {
  bonusPercentage = 0.04; 
} else if (employee.reviewRating === 4) {
  bonusPercentage = 0.06;
  console.log('jem %%%%%', bonusPercentage);
} else if (employee.reviewRating === 5) {
  bonusPercentage = 0.10;
} else {
  console.log('employee didn\'t meet any criteria');
}

//  🌟 checking employeeNumber is 4 digits long, if yes + 4% more to bonusPercentage
if (employee.employeeNumber.length == 4) {
  bonusPercentage += 0.05; 
}

//  🌟 bonus adjustment for those with annualSalary of 65000 
//     and auto-set high annualSalary's bonusPercentage to 0% (the min)
if(Number(employee.annualSalary) >= 65000 && bonusPercentage > 0){
  bonusPercentage -= 0.01;
}

//  🌟 auto-set high bonusPercentage to 13% (the max)
  if(bonusPercentage > 0.13){
    bonusPercentage = 0.13

  }
 //  🌟  calculate the decimal points into percentages 
    bonusPercentage *= 100; 

  const newEmployeeObjet = {
    ...employee, 
    bonusPercentage, 
    totalCompensation: (Number(employee.annualSalary) * bonusPercentage) + Number(employee.annualSalary),
    totalBonus: Math.round(bonusPercentage)
    
  }
  console.log('testing....', newEmployeeObjet);
}

employeeObject(employees); 