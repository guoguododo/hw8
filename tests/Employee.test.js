const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can create Employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Can add employee name", () => {
        const name = "Dongyu";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("Can add employee name id", () => {
        const id = 1;
        const employee = new Employee("Dongyu", id);
        expect(employee.id).toBe(id);
    });

    it("Can add employee name email", () => {
        const email = "guoguody@hotail.com";
        const employee = new Employee("Dongyu", 1, email);
        expect(employee.email).toBe(email);
    });


    describe("getName", () => {
        it("Can getName()", () => {
            const testValue = "ABC";
            const employee = new Employee(testValue);
            expect(employee.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can getId()", () => {
            const testValue = 123;
            const employee = new Employee("ABC", testValue);
            expect(employee.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can getEmail()", () => {
            const testValue = "abc@123.com";
            const employee = new Employee("ABC", 123, testValue);
            expect(employee.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("should getRole()", () => {
            const testValue = "Employee";
            const employee = new Employee("ABC", 123, "abc@123.com");
            expect(employee.getRole()).toBe(testValue);
        });
    });
    
});




