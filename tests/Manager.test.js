const Manager = require("../lib/Manager");


describe("Manager", () => {
    it("Can add manager officeNumber", () => {
        const testValue = 101;
        const manager = new Manager("abc", 123, "shf@checktest.com", testValue);
        expect(manager.officeNumber).toBe(testValue);
    });

    it("getRole() returns Engineer", () => {
        const testValue = "Manager";
        const manager = new Manager("abc", 123, "shf@checktest.com", 101);
        expect(manager.getRole()).toBe(testValue);
      });

      test("Can getOffice()", () => {
        const testValue = 101;
        const manager = new Manager("abc", 123, "shf@checktest.com", testValue);
        expect(manager.getOfficeNumber()).toBe(testValue);
      });
});