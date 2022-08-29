import { createShip } from "../index";

// test("factory function creates object", () => {
// 	expect(createShip()).toBe(3);
// });

test("factory function creates object", () => {
	expect(createShip()).toBeInstanceOf(Object);
});
