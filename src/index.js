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

function createGameboard() {
	// let missedCoords = [];

	const receiveAttack = () => {
		// takes a pair of coordinates
		// determines whether the attack hit a ship
		// send hit() function to correct ship
		// OR record coordinates of missed shot
	};

	const checkAllShipsSunk = () => {
		// check isSunk() for all ships
	};

	return {
		receiveAttack,
		checkAllShipsSunk,
	};
}
const test2 = createGameboard();
console.log(test2);
