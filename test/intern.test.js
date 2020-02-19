const Intern = require("../lib/Intern");

//Testing to ensure that new Intern constructor is an object and the following parameters correspond to the expected argument and values
test("Can set school via constructor", () => {
  const testItem = "BROWN";
  const e = new Intern("Foo", 1, "test@test.com", testItem);
  expect(e.school).toBe(testItem);
});

test("getRole() should return \"Intern\"", () => {
  const testItem = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testItem);
});

test("Can get school via getSchool()", () => {
  const testItem = "BROWN";
  const e = new Intern("Foo", 1, "test@test.com", testItem);
  expect(e.getSchool()).toBe(testItem);
});