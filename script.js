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
console.log(firstBudget(2500));

console.log(secondBudget(70));
console.log(secondBudget(750));
console.log(secondBudget(7500));





multiple = (a, b) => {

    const stamp = new Date().getTime();

    while (new Date().getTime() < stamp + 2000) {}

    return a * b;
}


function multipleDecorator() {
    const map = new Map();

    return function (a, b) {
        if (map.has(`${a} - ${b}`)) {
            return map.get(`${a} - ${b}`);
        } 
			map.set(`${a} - ${b}`, multiple(a, b));
			return multiple(a, b);
		};
    }

	const add = multipleDecorator();

	console.log(add(2,2));
	console.log(add(2,2));
	console.log(add(2,4));
	console.log(add(2,4));
