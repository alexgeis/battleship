import "./css/style.scss";

// length = 2-5
function createShip(length) {
	const hit = (number) => {
		// mark the provided position number as a hit
		console.log("hit", number);
	};

	const isSunk = () => {
		// return true/false based on ship length and whether all of ship positions are ‘hit’
		console.log("isSunk");
	};

	return {
		length,
		hit,
		isSunk,
	};
}
const test = createShip(2);
console.log(test);
