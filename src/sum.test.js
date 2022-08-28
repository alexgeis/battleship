const addShit = require("./sum");

test("adds 1 + 2 to equal 3", () => {
	expect(addShit(1, 2)).toBe(3);
});
