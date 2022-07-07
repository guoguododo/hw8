const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can add git Hub account", () => {
        const testValue = "git123";
        const engineer = new Engineer("abc", 123, "shf@checktest.com", testValue);
        expect(engineer.github).toBe(testValue);
    });

    it("getRole() returns Engineer", () => {
  const testValue = "Engineer";
  const engineer = new Engineer("abc", 123, "shf@checktest.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});
});
