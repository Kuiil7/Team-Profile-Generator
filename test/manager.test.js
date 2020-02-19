const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

//Testing to ensure that new Manager constructor is an object and the following parameters correspond to the expected argument and values

test("Can set office number via constructor argument", () => {
  const testItem = 100;
  const e = new Manager("Foo", 1, "test@test.com", testItem);
  expect(e.officeNumber).toBe(testItem);
});

test("getRole() should return \"Manager\"", () => {
  const testItem = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testItem);
});

test("Can get office number via getOffice()", () => {
  const testItem = 100;
  const e = new Manager("Foo", 1, "test@test.com", testItem);
  expect(e.getOfficeNumber()).toBe(testItem);
});