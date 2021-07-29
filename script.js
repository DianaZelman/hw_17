function createBudget() {
    let budget = 0;

    return function (salary) {
        budget += salary;
        return budget;
    }
};

const firstBudget = createBudget();
const secondBudget = createBudget();

console.log(firstBudget(25));
console.log(firstBudget(250));

console.log(secondBudget(70));
console.log(secondBudget(750));