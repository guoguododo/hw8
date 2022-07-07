const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("Can add Intern school info", () => {
        const testValue = "UC";
        const intern = new Intern("abc", 123, "shf@checktest.com", testValue);
        expect(intern.school).toBe(testValue);
    });

    it("getRole() returns Intern", () => {
  const testValue = "Intern";
  const intern = new Intern("abc", 123, "shf@checktest.com", "UC");
  expect(intern.getRole()).toBe(testValue);
});
});