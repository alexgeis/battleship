import { createGameboard } from "../index";

test("adds 1 + 2 to equal 3", () => {
	expect(createGameboard(1, 2)).toBe(3);
});
