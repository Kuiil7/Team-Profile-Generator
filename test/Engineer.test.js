const Engineer = require("../lib/Engineer");

//Testing to ensure that new Engineer constructor is an object and the following parameters correspond to the expected argument and values

test("Can set GitHUb account via constructor", () => {
  const testItem = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testItem);
  expect(e.github).toBe(testItem);
});

test("getRole() should return \"Engineer\"", () => {
  const testItem = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testItem);
});

test("Can get GitHub username via getGithub()", () => {
  const testItem = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testItem);
  expect(e.getGitHub()).toBe(testItem);
});
module.exports = Engineer;