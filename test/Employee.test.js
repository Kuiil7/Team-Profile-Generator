const Employee = require("../lib/Employee");

//Testing to ensure that new Employee constructor is an object and the following parameters correspond to the expected argument and values
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});


test("Can set name via constructor arguments", () => {
  const name = "John Doe";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});


test("Can set id via constructor argument", () => {
  const testItem = 100;
  const e = new Employee("Foo", testItem);
  expect(e.id).toBe(testItem);
});

test("Can set email via constructor argument", () => {
  const testItem = "test@test.com";
  const e = new Employee("Foo", 1, testItem);
  expect(e.email).toBe(testItem);
});

test("Can get name via getName()", () => {
  const testItem = "Alice";
  const e = new Employee(testItem);
  expect(e.getName()).toBe(testItem);
});

test("Can get id via getId()", () => {
  const testItem = 100;
  const e = new Employee("Foo", testItem);
  expect(e.getId()).toBe(testItem);
});

test("Can get email via getEmail()", () => {
  const testItem = "test@test.com";
  const e = new Employee("Foo", 1, testItem);
  expect(e.getEmail()).toBe(testItem);
});

test("getRole() should return \"Employee\"", () => {
  const testItem = "Employee";
  const e = new Employee("John Doe", 1, "test@test.com");
  expect(e.getRole()).toBe(testItem);
});
